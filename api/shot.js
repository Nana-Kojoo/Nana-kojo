// Vercel serverless function: GET /api/shot?id=<project id>
//
// Returns a fresh screenshot of a project's live website, so previews update
// on their own when a site is redesigned. Screenshots come from Microlink and
// are cached at Vercel's edge for 12 hours. If anything fails, it redirects to
// the saved fallback image in assets/shots/.
//
// Only the sites below can be captured. Keep this list in sync with the
// projects in script.js that have an `image`.

const SITES = {
  onekey: 'https://onekey1.vercel.app/',
  ridefund: 'https://ridefund.vercel.app/',
  kinkan: 'https://kinkan.org/',
  'laws-of-beauty': 'https://www.lawsofbeautyacademy.com/',
  'moro-ai': 'https://moro-ai.onrender.com/',
};

module.exports = async function handler(req, res) {
  const id = String((req.query && req.query.id) || '');
  const site = SITES[id];
  if (!site) {
    res.status(404).json({ error: 'Unknown project' });
    return;
  }

  const api = 'https://api.microlink.io/?' + new URLSearchParams({
    url: site,
    screenshot: 'true',
    meta: 'false',
    'viewport.width': '1280',
    'viewport.height': '720',
    'viewport.deviceScaleFactor': '1',
    'screenshot.type': 'jpeg',
  });

  try {
    const meta = await fetch(api);
    const data = await meta.json();
    const shotUrl = data && data.data && data.data.screenshot && data.data.screenshot.url;
    if (!meta.ok || !shotUrl) throw new Error('No screenshot');

    const shot = await fetch(shotUrl);
    if (!shot.ok) throw new Error('Screenshot download failed');

    res.setHeader('Content-Type', shot.headers.get('content-type') || 'image/jpeg');
    res.setHeader('Cache-Control', 'public, s-maxage=43200, stale-while-revalidate=86400');
    res.status(200).send(Buffer.from(await shot.arrayBuffer()));
  } catch (err) {
    // Try again in 10 minutes; serve the saved screenshot meanwhile.
    res.setHeader('Cache-Control', 'public, s-maxage=600');
    res.redirect(302, '/assets/shots/' + id + '.jpg');
  }
};
