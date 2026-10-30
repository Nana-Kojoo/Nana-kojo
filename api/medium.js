// Vercel serverless function: GET /api/medium?user=<medium username>
//
// Medium's RSS feed doesn't allow cross-origin requests from the browser,
// so this fetches it server-side and returns the latest posts as JSON.
// Responses are cached at the edge for 10 minutes.

const ENTITIES = { '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#39;': "'", '&#x27;': "'", '&nbsp;': ' ' };

function decode(text) {
  return text
    .replace(/&(amp|lt|gt|quot|nbsp|#39|#x27);/g, (m) => ENTITIES[m])
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)));
}

function field(block, tag) {
  const m = block.match(new RegExp('<' + tag + '[^>]*>([\\s\\S]*?)</' + tag + '>'));
  if (!m) return '';
  return m[1].replace(/^\s*<!\[CDATA\[/, '').replace(/\]\]>\s*$/, '').trim();
}

function parseItem(block) {
  const content = field(block, 'content:encoded');
  const images = [...content.matchAll(/<img[^>]+src="([^"]+)"/g)]
    .map((m) => m[1])
    .filter((src) => !src.includes('/_/stat'));
  const text = decode(content.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
  return {
    title: decode(field(block, 'title')),
    link: field(block, 'link').split('?')[0],
    pubDate: field(block, 'pubDate'),
    thumbnail: images[0] || '',
    excerpt: text.slice(0, 260),
    minutes: Math.max(1, Math.ceil(text.split(' ').length / 225)),
  };
}

module.exports = async function handler(req, res) {
  const user = String((req.query && req.query.user) || '').replace(/^@/, '');
  if (!/^[A-Za-z0-9_.-]{1,50}$/.test(user)) {
    res.status(400).json({ error: 'Invalid Medium username' });
    return;
  }

  try {
    const feed = await fetch('https://medium.com/feed/@' + user, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; portfolio-feed/1.0)' },
    });
    if (!feed.ok) {
      res.status(feed.status === 404 ? 404 : 502).json({ error: 'Feed unavailable' });
      return;
    }
    const xml = await feed.text();
    const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].slice(0, 10).map((m) => parseItem(m[1]));

    res.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate=3600');
    res.status(200).json({ items });
  } catch (err) {
    res.status(502).json({ error: 'Feed unavailable' });
  }
};
