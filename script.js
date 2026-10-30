(function(){
  "use strict";

  /* =========================================================
     DATA
  ========================================================= */
  var PROJECTS = [
    {
      id: "counselconnect",
      name: "CounselConnect",
      category: ["building","web"],
      status: "In progress",
      desc: "A lawyer locator app that helps people find and connect with the right lawyer.",
      stack: [],
      github: "https://github.com/Nana-Kojoo",
      demo: "#",
      detail: {
        overview: "CounselConnect is a lawyer locator app I'm building. It helps people find a lawyer who fits their needs and get in touch with them.",
        problem: "Finding the right lawyer usually comes down to who you happen to know. There's no simple place to see who practises what, and where."
      }
    },
    {
      id: "ghana-duty-calculator",
      name: "Ghana Duty Calculator",
      category: ["building","web"],
      status: "In progress",
      desc: "A calculator that estimates the import duties and taxes payable when bringing goods into Ghana.",
      stack: [],
      github: "https://github.com/Nana-Kojoo",
      demo: "#",
      detail: {
        overview: "A duty calculator I'm building for Ghana: enter what you're importing and get an estimate of the duties and taxes before it lands.",
        problem: "Import duties in Ghana stack several charges on top of each other, so it's hard to know what you'll actually pay until you're at the port."
      }
    },
    {
      id: "onekey",
      name: "ONEKEY",
      category: ["apis","web"],
      status: "Active",
      date: "Aug 2026",
      desc: "API discovery platform for developers. Search, inspect, and test public APIs without switching between six tabs.",
      stack: ["React","Flask","PostgreSQL"],
      github: "https://github.com/Nana-Kojoo/onekey1",
      demo: "https://onekey1.vercel.app/",
      image: "assets/shots/onekey.jpg",
      detail: {
        overview: "ONEKEY started as a personal itch: I was tired of losing track of which API needed which header format. It grew into a small platform for discovering and testing public APIs from one place.",
        problem: "Developers spend a surprising amount of time hunting for API documentation, then testing endpoints across Postman, browser tabs, and half-remembered curl commands.",
        built: "A single workspace to search public APIs, inspect their documentation, and send live test requests, with saved collections so you don't repeat the same setup twice.",
        features: "Endpoint search across a growing catalog, a live request runner with response inspection, saved workspaces per project, and auth presets for common schemes.",
        challenges: "Designing a request engine flexible enough to handle wildly different auth schemes (API keys, OAuth, bearer tokens) without the UI turning into a settings maze.",
        learned: "API design is as much about naming decisions as it is about the requests themselves. Half my time went into deciding what to call things, not how to build them."
      }
    },
    {
      id: "ridefund",
      name: "RideFund",
      category: ["web","experiments"],
      status: "Prototype",
      date: "Jul 2026",
      desc: "A savings and cost-splitting tool for groups who share transport regularly.",
      stack: ["Next.js","Node","MongoDB"],
      github: "https://github.com/Nana-Kojoo/RideFund",
      demo: "https://ridefund.vercel.app/",
      image: "assets/shots/ridefund.jpg",
      detail: {
        overview: "RideFund is a prototype built after one too many arguments over trotro fares and fuel money in a group chat.",
        problem: "Groups that share rides regularly rarely track who has paid what, so the same few people end up covering costs.",
        built: "A lightweight app where a group can log shared trips, split cost automatically, and see who owes what without a spreadsheet.",
        features: "Group wallets, automatic even-split and custom-split modes, a running balance per member, and simple trip logging.",
        challenges: "Keeping the interface usable for people who actively dislike finance apps — most of the design time went into removing steps, not adding features.",
        learned: "The best version of a finance tool is the one that asks the fewest questions."
      }
    },
    {
      id: "kinkan",
      date: "2023",
      name: "Kinkan Educational Consult",
      category: ["clients","software","web"],
      status: "Live",
      desc: "The official website and internal tools for Kinkan, an education support organisation in Accra.",
      stack: ["React","Firebase"],
      github: "https://github.com/Nana-Kojoo",
      demo: "https://kinkan.org/",
      image: "assets/shots/kinkan.jpg",
      detail: {
        overview: "A long-running engagement building and maintaining the digital side of an educational consultancy — the public site and a few internal tools for their team.",
        problem: "The consultancy relied on manual spreadsheets and WhatsApp for tracking student applications and consultations.",
        built: "A public-facing website plus an internal dashboard for tracking applicants, consultations, and follow-ups.",
        features: "Applicant tracking, consultation scheduling, and a simple content system so the team can update the public site without my help.",
        challenges: "Building something non-technical staff could actually maintain, which meant resisting the urge to add anything clever.",
        learned: "Good internal tools are judged by how rarely people need to ask you for help."
      }
    },
    {
      id: "laws-of-beauty",
      name: "Laws of Beauty Academy",
      category: ["clients","web"],
      status: "Live",
      desc: "The website for Laws of Beauty Academy, a fashion design, beauty and hair school in Accra.",
      stack: ["HTML/CSS/JS"],
      github: "https://github.com/Nana-Kojoo",
      demo: "https://lobaa.vercel.app/",
      image: "assets/shots/laws-of-beauty.jpg",
      detail: {
        overview: "The official website for Laws of Beauty Academy, a fashion design and beauty school in Accra, Ghana.",
        built: "A responsive site that presents the academy, its courses and its work, and points prospective students to apply for admission.",
        features: "Course pages for fashion design, cosmetology, hairdressing, beauty, barbering and two-month short courses, a gallery, contact details, and an \"Apply for Admission\" flow."
      }
    },
    {
      id: "moro-ai",
      name: "Moro AI",
      category: ["clients","web"],
      status: "Live",
      desc: "An AI writing tool that turns robotic, overly polished text into clear, natural writing that sounds like you.",
      stack: [],
      github: "https://github.com/Nana-Kojoo",
      demo: "https://moro-ai.onrender.com/",
      image: "assets/shots/moro-ai.jpg",
      detail: {
        overview: "Moro AI makes AI writing sound like a person wrote it. It refines tone, clarity and context without losing the writer's voice.",
        problem: "AI-generated text often reads as stiff and over-polished, which makes it sound off for the audience it's meant for.",
        features: "A Humanize tool that rewrites text side by side with the original, writing modes for students, professionals, business and personal use, a choice of neutral, formal or friendly tone, and a free trial."
      }
    },
    {
      id: "galamsey",
      name: "Ghana Against Galamsey",
      category: ["experiments","web"],
      status: "Live",
      desc: "A small awareness site tracking the impact of illegal mining on Ghana's water bodies.",
      stack: ["HTML/CSS/JS"],
      github: "https://github.com/Nana-Kojoo",
      demo: "#",
      detail: {
        overview: "A weekend project that turned into something I keep updating. It presents publicly available data about galamsey's effect on rivers in a format that's easier to sit with than a report.",
        problem: "Information about galamsey's environmental impact exists, but it's scattered across reports most people won't read.",
        built: "A static site that visualizes affected water bodies and summarizes findings in plain language.",
        features: "A map view of affected regions, a simple timeline, and short plain-language summaries of each report referenced.",
        challenges: "Presenting a serious issue without either sensationalizing it or making it feel abstract and distant.",
        learned: "Sometimes the hardest part of a build is the writing, not the code."
      }
    },
    {
      id: "presto-tickets",
      date: "Jun 2026",
      name: "Presto Tickets",
      category: ["web","apis"],
      status: "Experiment",
      desc: "An event ticketing flow experiment: browse events, reserve seats, checkout.",
      stack: ["React","Express","PostgreSQL"],
      github: "https://github.com/Nana-Kojoo",
      demo: "#",
      detail: {
        overview: "A side experiment built while working at Presto, exploring a different take on the seat reservation and checkout flow.",
        problem: "Seat reservation flows tend to either lock seats too aggressively or let too many people compete for the same seat at checkout.",
        built: "A ticketing flow with a short reservation hold, live seat-map updates, and a streamlined checkout.",
        features: "Live seat availability, a countdown-based hold on selected seats, and a three-step checkout.",
        challenges: "Handling race conditions when multiple people try to reserve the same seat at once.",
        learned: "A lot of 'frontend' problems are actually concurrency problems wearing a UI."
      }
    },
    {
      id: "shelfnote",
      name: "Shelfnote",
      category: ["experiments","software"],
      status: "Experiment",
      desc: "A tiny CLI tool for keeping reading notes without leaving the terminal.",
      stack: ["Python"],
      github: "https://github.com/Nana-Kojoo",
      demo: "#",
      detail: {
        overview: "Built in an afternoon because I kept losing notes on books in random text files.",
        problem: "Note-taking apps have too much overhead for something as small as 'remember this one paragraph.'",
        built: "A command-line tool that logs quotes and notes against a book title, searchable from the terminal.",
        features: "Quick capture command, full-text search, and export to a single markdown file.",
        challenges: "Keeping the tool genuinely fast to use, since the entire point was avoiding friction.",
        learned: "Small tools you actually use beat impressive tools you don't."
      }
    }
  ];

  var FEED = [
    {
      kind: "Project announcement",
      date: "Oct 2026",
      text: "Two things I'm building right now:\n\n⚖️ CounselConnect — a lawyer locator app\n🧮 A Ghana duty calculator\n\nMore soon 👀",
      quote: { type: "project", id: "counselconnect" }
    },
    {
      kind: "Build log",
      date: "Sep 2026",
      text: "Been working on a cleaner API architecture today.\n\nStill figuring things out. Still shipping."
    },
    {
      kind: "Project launch",
      date: "Aug 2026",
      text: "ONEKEY is live. Search, inspect, and test public APIs from one place — built it because I was tired of losing track of headers across six tabs.",
      quote: { type: "project", id: "onekey" }
    },
    {
      kind: "Technical note",
      date: "Aug 2026",
      text: "Spent way too long today debugging an auth issue that turned out to be a trailing slash. Adding that to the list of things I now check first."
    },
    {
      kind: "Achievement",
      date: "Jul 2026",
      text: "Wrapped up my internship at NovaCreateHub. Learned more about reading other people's code in three months than I expected to.",
      quote: { type: "work", id: "NovaCreateHub" }
    },
    {
      kind: "Screenshot",
      date: "Jul 2026",
      text: "Early look at the RideFund group balance screen. Still deciding if the split logic needs a manual override.",
      media: "ridefund"
    },
    {
      kind: "Project announcement",
      date: "Jun 2026",
      text: "Starting a small experiment: a ticketing flow with live seat holds. Mostly curious how far I can push the concurrency handling before it breaks.",
      quote: { type: "project", id: "presto-tickets" }
    },
    {
      kind: "Text update",
      date: "Jun 2026",
      text: "Reminder to self: not every project needs a database on day one."
    }
  ];

  var WORK = [
    {
      company: "NovaCreateHub",
      role: "Software Development Intern",
      date: "2026",
      desc: "Worked on internal tooling and contributed to a couple of client-facing features. Spent a lot of time reading code before I got to write any.",
      tags: ["React","Node"]
    },
    {
      company: "Presto",
      role: "Software Development",
      date: "2025 – 2026",
      desc: "Built parts of the ticket reservation and checkout flow, including handling concurrent seat holds.",
      tags: ["React","PostgreSQL"],
      quote: { type: "project", id: "presto-tickets" }
    },
    {
      company: "Freelance",
      role: "Web & Software Development",
      date: "2025 – Present",
      desc: "Websites, internal tools, and the occasional API for local clients. Recent client sites include Laws of Beauty Academy and Moro AI.",
      tags: ["React","Flask"],
      quote: { type: "project", id: "laws-of-beauty" }
    },
    {
      company: "Kinkan Educational Consult",
      role: "Software Developer / Consultant",
      date: "2023 – Present",
      website: "https://kinkan.org/",
      desc: "A long-running relationship — building and maintaining their digital tools as the consultancy has grown.",
      tags: ["Firebase","React"],
      quote: { type: "project", id: "kinkan" }
    }
  ];

  var NOTES = [
    {
      title: "Things I learned building my first Flask API",
      excerpt: "Mostly that error handling should have been my first decision, not my last.",
      date: "Aug 2026",
      read: "4 min read"
    },
    {
      title: "Why I started thinking more about API architecture",
      excerpt: "A messy ONEKEY refactor forced me to actually plan before writing routes.",
      date: "Jul 2026",
      read: "6 min read",
      quote: { type: "project", id: "onekey" }
    },
    {
      title: "Building products while studying Computer Science",
      excerpt: "Coursework and side projects pull from different muscles. Both matter.",
      date: "Jun 2026",
      read: "5 min read"
    },
    {
      title: "Notes from my internship",
      excerpt: "What surprised me most about working inside an existing codebase.",
      date: "May 2026",
      read: "5 min read",
      quote: { type: "work", id: "NovaCreateHub" }
    },
    {
      title: "React vs server-rendered interfaces",
      excerpt: "No hot takes here — just what's actually worked for the projects I've shipped.",
      date: "Apr 2026",
      read: "7 min read"
    }
  ];



  /* =========================================================
     SITE CONFIG — your details live here
  ========================================================= */
  var SITE = {
    name: "Asare Elvis Kojo",
    handle: "@_asarekojo",
    email: "asareelvis200@gmail.com",
    avatar: "assets/avatar.jpg",
    links: {
      x: "https://x.com/_asarekojo",
      github: "https://github.com/Nana-Kojoo",
      linkedin: "https://linkedin.com/in/nana-kojo",
      website: "https://nana-kojo.vercel.app"
    },
    githubUser: "Nana-Kojoo",
    // Medium username without the @ — e.g. "asarekojo". Blogs load live from it.
    // While it's empty, the Blogs tab shows the local NOTES below.
    medium: "",
    // WhatsApp number in international format, digits only — e.g. "233241234567".
    // While it's empty, every WhatsApp button stays hidden.
    whatsapp: "",
    whatsappGreeting: "Hi Asare, I came across your website and wanted to reach out."
  };

  var NAME = SITE.name;
  var HANDLE = SITE.handle;
  var EMAIL = SITE.email;
  var AVATAR = SITE.avatar;
  var FEATURED_ID = "onekey";
  var TABS = ["posts","work","projects","blogs","about"];

  // Context line shown above a feed post, X-style ("📌 Pinned", "🔁 Reposted").
  var KIND_ICON = {
    "Build log": "code",
    "Project launch": "rocket",
    "Technical note": "note",
    "Achievement": "trophy",
    "Screenshot": "image",
    "Project announcement": "megaphone"
  };

  // Cover gradients for article cards, cycled per note.
  var ARTICLE_COVERS = [
    "linear-gradient(135deg,#1d9bf0,#7856ff)",
    "linear-gradient(135deg,#00ba7c,#1d9bf0)",
    "linear-gradient(135deg,#f91880,#ff7a00)",
    "linear-gradient(135deg,#7856ff,#f91880)",
    "linear-gradient(135deg,#ffd400,#00ba7c)"
  ];

  /* =========================================================
     ICONS
  ========================================================= */
  var ICONS = {
    home: '<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
    briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18"/>',
    grid: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
    note: '<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6M8 13h8M8 17h5"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    moon: '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',
    send: '<path d="M22 2 11 13M22 2l-7 20-4-9-9-4z"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    reply: '<path d="M21 11.5a8.4 8.4 0 0 1-9 8.5 8.6 8.6 0 0 1-3.9-.9L3 20l1.1-4.6A8.5 8.5 0 1 1 21 11.5z"/>',
    repost: '<path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>',
    heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"/>',
    bookmark: '<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>',
    share: '<path d="M12 3v13M7 8l5-5 5 5M5 14v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5"/>',
    back: '<path d="M19 12H5M12 19l-7-7 7-7"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
    pin: '<path d="M12 17v5M9 3h6M10 3v6l-4 4v2h12v-2l-4-4V3"/>',
    link: '<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/>',
    close: '<path d="M18 6 6 18M6 6l12 12"/>',
    external: '<path d="M7 17 17 7M8 7h9v9"/>',
    location: '<path d="M12 21s-7-6.5-7-11.5A7 7 0 0 1 19 9.5C19 14.5 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
    school: '<path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12.5V17c0 1.5 3 3 6 3s6-1.5 6-3v-4.5"/>',
    calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M3 9h18M8 2v4M16 2v4"/>',
    copy: '<rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1"/>',
    code: '<path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/>',
    rocket: '<path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2.1-.1-2.9a2.2 2.2 0 0 0-2.9-.1z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.9A12.9 12.9 0 0 1 22 2c0 2.7-.8 7.5-6 11a22.4 22.4 0 0 1-4 2z"/><path d="M9 12H4s.6-3 2-4c1.6-1.1 5 0 5 0M12 15v5s3-.6 4-2c1.1-1.6 0-5 0-5"/>',
    trophy: '<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.7V17c0 .6-.5 1-1 1.2C7.9 18.8 7 20.2 7 22M14 14.7V17c0 .6.5 1 1 1.2 1.2.6 2 2 2 3.8M18 2H6v7a6 6 0 0 0 12 0z"/>',
    image: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21"/>',
    megaphone: '<path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>',
    bulb: '<path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.1V18h6v-1.2c0-.8.4-1.6 1-2.1A7 7 0 0 0 12 2z"/>',
    github: '<path d="M12 .5C5.73.5.98 5.24.98 11.5c0 4.99 3.24 9.22 7.73 10.72.56.1.77-.24.77-.54 0-.27-.01-1.16-.02-2.1-3.14.68-3.81-1.34-3.81-1.34-.51-1.31-1.26-1.66-1.26-1.66-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.74 2.65 1.24 3.3.95.1-.73.4-1.24.72-1.53-2.51-.29-5.14-1.25-5.14-5.58 0-1.23.44-2.24 1.16-3.03-.12-.29-.5-1.45.11-3.02 0 0 .95-.3 3.11 1.16a10.8 10.8 0 0 1 5.66 0c2.16-1.46 3.11-1.16 3.11-1.16.61 1.57.23 2.73.11 3.02.72.79 1.16 1.8 1.16 3.03 0 4.34-2.64 5.29-5.15 5.57.41.35.77 1.04.77 2.1 0 1.52-.01 2.74-.01 3.11 0 .3.2.65.78.54A10.51 10.51 0 0 0 23.02 11.5C23.02 5.24 18.27.5 12 .5z"/>',
    verified: '<path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z"/>',
    x: '<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>',
    whatsapp: '<path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.41-.08-.13-.28-.2-.57-.35zM12.05 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88zm8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.17-3.48-8.41z"/>',
    linkedin: '<path d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8.25h4.5V23h-4.5V8.25zM8.25 8.25h4.32v2.02h.06c.6-1.14 2.07-2.34 4.26-2.34 4.56 0 5.4 3 5.4 6.9V23h-4.5v-6.8c0-1.62-.03-3.7-2.25-3.7-2.26 0-2.6 1.76-2.6 3.58V23h-4.5V8.25z"/>'
  };
  var FILLED = { github:true, linkedin:true, x:true, whatsapp:true, verified:true };

  function icon(name, size, cls){
    size = size || 20;
    var paint = FILLED[name]
      ? 'fill="currentColor"'
      : 'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';
    return '<svg' + (cls ? ' class="' + cls + '"' : '') + ' width="' + size + '" height="' + size + '" viewBox="0 0 24 24" ' + paint + ' aria-hidden="true">' + ICONS[name] + '</svg>';
  }

  // Swap every <i data-icon="..."> placeholder for its inline SVG.
  function hydrateIcons(root){
    Array.prototype.forEach.call(root.querySelectorAll('i[data-icon]'), function(node){
      node.outerHTML = icon(node.getAttribute('data-icon'), parseInt(node.getAttribute('data-size'), 10) || 20, node.getAttribute('data-class'));
    });
  }

  // Point every [data-link] at the URL from SITE; hide what isn't configured.
  function hydrateLinks(){
    var hrefs = {
      x: SITE.links.x,
      github: SITE.links.github,
      linkedin: SITE.links.linkedin,
      website: SITE.links.website,
      email: 'mailto:' + SITE.email,
      whatsapp: SITE.whatsapp ? 'https://wa.me/' + SITE.whatsapp + '?text=' + encodeURIComponent(SITE.whatsappGreeting) : ''
    };
    Array.prototype.forEach.call(document.querySelectorAll('[data-link]'), function(a){
      var href = hrefs[a.getAttribute('data-link')];
      if(href){
        a.href = href;
      } else {
        (a.closest('[data-link-item]') || a).hidden = true;
      }
    });
    Array.prototype.forEach.call(document.querySelectorAll('[data-year]'), function(el){
      el.textContent = new Date().getFullYear();
    });
  }

  /* =========================================================
     HELPERS
  ========================================================= */
  function findProject(id){
    return PROJECTS.filter(function(p){ return p.id === id; })[0];
  }
  function findWork(company){
    return WORK.filter(function(w){ return w.company === company; })[0];
  }
  function statusPill(status){
    var active = status === 'Active' || status === 'Live';
    return '<span class="status-pill' + (active ? ' status-pill--active' : '') + '">' + status + '</span>';
  }
  // A screenshot of the live site, or a branded cover for projects without one.
  function projectMedia(p){
    if(p.image){
      return '<img class="shot" src="' + p.image + '" alt="Screenshot of the ' + p.name + ' website" width="1200" height="675" loading="lazy" decoding="async">';
    }
    var pick = 0;
    for(var i = 0; i < p.id.length; i++){ pick = (pick + p.id.charCodeAt(i)) % ARTICLE_COVERS.length; }
    return '<div class="cover-art" style="background:' + ARTICLE_COVERS[pick] + '">' +
      '<span class="cover-art__name">' + p.name + '</span>' +
      '<span class="cover-art__status">' + p.status + '</span>' +
    '</div>';
  }
  function verifiedBadge(){
    return '<span class="verified-wrap" title="Verified account">' + icon('verified', 18, 'verified') + '<span class="sr-only">Verified account</span></span>';
  }
  function avatarImg(cls){
    return '<img class="avatar ' + cls + '" src="' + AVATAR + '" alt="" width="40" height="40" decoding="async">';
  }

  // Stack names as clickable hashtags; "HTML/CSS/JS" becomes three tags.
  function withTags(text, tags){
    return tags && tags.length ? text + '\n\n' + hashtags(tags) : text;
  }
  function siteUrl(p){
    return p.demo && p.demo !== '#' ? p.demo : p.github;
  }
  function hostOf(url){
    return url.replace(/^https?:\/\//, '').replace(/\/$/, '');
  }
  function hashtags(tags){
    var out = [];
    tags.forEach(function(t){ t.split('/').forEach(function(part){ out.push(part); }); });
    return out.map(function(t){
      return '<a class="hashtag" href="#projects" data-tag="' + t + '">#' + t.replace(/[^A-Za-z0-9]/g, '') + '</a>';
    }).join(' ');
  }

  function readStore(key, fallback){
    try {
      var raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch(e){ return fallback; }
  }
  function writeStore(key, value){
    try { localStorage.setItem(key, JSON.stringify(value)); } catch(e){}
  }

  /* =========================================================
     RENDER: PROFILE STATS
  ========================================================= */
  function renderStats(){
    document.getElementById('postCount').textContent = (FEED.length + 2) + ' posts';
    document.getElementById('profileStats').innerHTML =
      '<a href="#projects"><strong>' + PROJECTS.length + '</strong> Projects</a>' +
      '<a href="#work"><strong>' + WORK.length + '</strong> Roles</a>' +
      '<a href="#blogs"><strong id="blogCount">' + (SITE.medium ? '–' : NOTES.length) + '</strong> Blogs</a>';
  }

  /* =========================================================
     POST BUILDING BLOCKS
  ========================================================= */
  var LIKES_KEY = 'asarekojo-likes';
  var SAVES_KEY = 'asarekojo-saves';
  var REPOSTS_KEY = 'asarekojo-reposts';
  var likes = readStore(LIKES_KEY, {});
  var saves = readStore(SAVES_KEY, {});
  var reposts = readStore(REPOSTS_KEY, {});

  function toggleButton(kind, id, label, iconName, store, withCount){
    var on = !!store[id];
    return '<button class="action action--' + kind + (on ? ' is-on' : '') + '" type="button" data-action="' + kind + '" data-id="' + id + '" aria-pressed="' + on + '" aria-label="' + label + '">' +
      '<span class="action__icon">' + icon(iconName, 18) + '</span>' +
      (withCount ? '<span class="action__count">' + (on ? 1 : '') + '</span>' : '') +
    '</button>';
  }

  function postActions(id){
    return '<div class="post__actions">' +
      '<button class="action action--reply" type="button" data-action="reply" aria-label="Reply">' +
        '<span class="action__icon">' + icon('reply', 18) + '</span></button>' +
      toggleButton('repost', id, 'Repost', 'repost', reposts, true) +
      toggleButton('like', id, 'Like', 'heart', likes, true) +
      toggleButton('save', id, 'Bookmark', 'bookmark', saves, false) +
      '<button class="action action--share" type="button" data-action="share" aria-label="Copy link">' +
        '<span class="action__icon">' + icon('share', 18) + '</span></button>' +
    '</div>';
  }

  function postHead(date){
    return '<div class="post__head">' +
      '<span class="post__name">' + NAME + '</span>' + verifiedBadge() +
      '<span class="post__handle">' + HANDLE + '</span>' +
      (date ? '<span class="post__dot">·</span><span class="post__date">' + date + '</span>' : '') +
    '</div>';
  }

  // o: { id, date, text, body, context:{icon,label}, href, thread }
  // `thread: true` draws the connector line down to the next post.
  function post(o){
    var cls = 'post' + (o.href ? ' post--link' : '') + (o.thread ? ' post--thread' : '');
    return '<article class="' + cls + '"' + (o.href ? ' data-href="' + o.href + '"' : '') + '>' +
      (o.context ? '<div class="post__context">' + icon(o.context.icon, 14) + '<span>' + o.context.label + '</span></div>' : '') +
      '<div class="post__aside">' + avatarImg('avatar--sm') + '</div>' +
      '<div class="post__main">' +
        postHead(o.date) +
        (o.text ? '<p class="post__text">' + o.text + '</p>' : '') +
        (o.body || '') +
        postActions(o.id) +
      '</div>' +
    '</article>';
  }

  function quoteData(ref){
    if(ref.type === 'project'){
      var p = findProject(ref.id);
      return p && { href: '#/project/' + p.id, date: p.date || p.status, text: p.name + ' — ' + p.desc, media: projectMedia(p) };
    }
    if(ref.type === 'work'){
      var w = findWork(ref.id);
      return w && { href: '#work', date: w.date, text: w.role + ' at ' + w.company + '. ' + w.desc };
    }
    if(ref.type === 'text'){
      return { href: ref.href, date: ref.date, text: ref.text };
    }
    return null;
  }

  // An embedded quote-post. Without an href it renders as a plain block.
  function quoteCard(ref){
    var q = ref && quoteData(ref);
    if(!q) return '';
    var tag = q.href ? 'a' : 'div';
    return '<' + tag + ' class="quote' + (ref.type === 'text' ? ' quote--pull' : '') + '"' + (q.href ? ' href="' + q.href + '"' : '') + '>' +
      '<div class="quote__head">' + avatarImg('avatar--xs') +
        '<span class="post__name">' + NAME + '</span>' + verifiedBadge() +
        '<span class="post__handle">' + HANDLE + '</span>' +
        (q.date ? '<span class="post__dot">·</span><span class="post__date">' + q.date + '</span>' : '') +
      '</div>' +
      '<div class="quote__text">' + q.text + '</div>' +
      (q.media ? '<div class="quote__media" aria-hidden="true">' + q.media + '</div>' : '') +
    '</' + tag + '>';
  }

  function projectCard(p){
    return '<a class="link-card" href="#/project/' + p.id + '">' +
      '<div class="link-card__media">' + projectMedia(p) + '</div>' +
      '<div class="link-card__body">' +
        '<span class="link-card__domain">' + hostOf(siteUrl(p)) + '</span>' +
        '<span class="link-card__title">' + p.name + ' ' + statusPill(p.status) + '</span>' +
        (p.stack.length ? '<span class="link-card__desc">' + p.stack.join(' · ') + '</span>' : '') +
      '</div>' +
    '</a>';
  }

  function jobCard(w){
    return '<div class="job-card">' +
      '<span class="job-card__logo" aria-hidden="true">' + w.company.charAt(0) + '</span>' +
      '<span class="job-card__body">' +
        '<span class="job-card__company">' + w.company + '</span>' +
        '<span class="job-card__role">' + w.role + '</span>' +
        '<span class="job-card__date">' + icon('calendar', 14) + w.date + '</span>' +
        (w.website ? '<a class="job-card__site" href="' + w.website + '" target="_blank" rel="noopener">' + icon('link', 14) + hostOf(w.website) + '</a>' : '') +
      '</span>' +
    '</div>';
  }

  function articleCard(n, i){
    return '<div class="article-card">' +
      '<div class="article-card__cover" style="background:' + ARTICLE_COVERS[i % ARTICLE_COVERS.length] + '" aria-hidden="true">' + icon('note', 30) + '</div>' +
      '<div class="article-card__body">' +
        '<span class="article-card__label">' + icon('note', 14) + 'Article</span>' +
        '<span class="article-card__title">' + n.title + '</span>' +
        '<span class="article-card__meta">' + n.date + ' · ' + n.read + '</span>' +
      '</div>' +
    '</div>';
  }

  /* =========================================================
     RENDER: POSTS
  ========================================================= */
  function renderFeed(){
    var p = findProject(FEATURED_ID);
    var featured = post({
      id: 'pinned',
      date: p.date,
      context: { icon: 'rocket', label: 'Featured project' },
      href: '#/project/' + p.id,
      text: withTags('Introducing ' + p.name + ' — ' + p.desc, p.stack),
      body: projectCard(p)
    });
    document.getElementById('feedList').innerHTML = githubPinned() + featured + FEED.map(function(item, i){
      var kindIcon = KIND_ICON[item.kind];
      return post({
        id: 'post-' + i,
        date: item.date,
        context: kindIcon ? { icon: kindIcon, label: item.kind } : null,
        text: item.text,
        body: (item.media ? '<div class="post__media">' + projectMedia(findProject(item.media)) + '</div>' : '') + quoteCard(item.quote)
      });
    }).join('');
  }

  /* =========================================================
     RENDER: WORK
  ========================================================= */
  function renderWork(){
    document.getElementById('timeline').innerHTML = WORK.map(function(w){
      var current = /Present/.test(w.date);
      return post({
        id: 'work-' + w.company,
        date: w.date,
        context: { icon: 'briefcase', label: current ? 'Current role' : 'Past role' },
        text: withTags(w.desc, w.tags),
        body: jobCard(w) + quoteCard(w.quote)
      });
    }).join('');
  }

  /* =========================================================
     RENDER: PROJECTS
  ========================================================= */
  var projectState = { filter: 'all', query: '' };

  function projectPost(p){
    return post({
      id: 'project-' + p.id,
      date: p.date,
      href: '#/project/' + p.id,
      text: withTags(p.name + ' — ' + p.desc, p.stack),
      body: projectCard(p)
    });
  }

  function matchesQuery(p, q){
    if(!q) return true;
    var haystack = [p.name, p.desc, p.status].concat(p.stack).join(' ').toLowerCase();
    return haystack.indexOf(q.toLowerCase()) !== -1;
  }

  function renderProjects(){
    var list = document.getElementById('projectGrid');
    var note = document.getElementById('searchNote');
    var f = projectState.filter, q = projectState.query.trim();
    var filtered = PROJECTS.filter(function(p){
      return (f === 'all' || p.category.indexOf(f) !== -1) && matchesQuery(p, q);
    });

    if(q){
      note.hidden = false;
      note.innerHTML = '<span>' + filtered.length + ' result' + (filtered.length === 1 ? '' : 's') + ' for <strong></strong></span><button type="button" id="clearSearch">Clear</button>';
      note.querySelector('strong').textContent = '"' + q + '"';
    } else {
      note.hidden = true;
      note.innerHTML = '';
    }

    list.innerHTML = filtered.length
      ? filtered.map(projectPost).join('')
      : '<div class="empty"><strong>No projects found</strong>Try a different search or filter.</div>';
  }

  document.getElementById('filterRow').addEventListener('click', function(e){
    var btn = e.target.closest('.chip');
    if(!btn) return;
    Array.prototype.forEach.call(this.querySelectorAll('.chip'), function(b){
      b.classList.toggle('is-active', b === btn);
      b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
    });
    projectState.filter = btn.getAttribute('data-filter');
    renderProjects();
  });

  document.getElementById('searchNote').addEventListener('click', function(e){
    if(e.target.id === 'clearSearch') setQuery('');
  });

  /* =========================================================
     SEARCH (right sidebar)
  ========================================================= */
  var searchInput = document.getElementById('searchInput');

  function setQuery(q){
    projectState.query = q;
    if(searchInput.value !== q) searchInput.value = q;
    renderProjects();
  }

  searchInput.addEventListener('input', function(){
    setQuery(searchInput.value);
    if(searchInput.value.trim() && location.hash !== '#projects') location.hash = '#projects';
  });
  searchInput.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){ setQuery(''); searchInput.blur(); }
  });
  document.getElementById('searchForm').addEventListener('submit', function(e){
    e.preventDefault();
    if(location.hash !== '#projects') location.hash = '#projects';
  });

  /* =========================================================
     SHARED FETCH / TEXT HELPERS
  ========================================================= */
  function fetchJSON(url){
    return fetch(url).then(function(r){
      if(!r.ok) throw new Error(r.status);
      return r.json();
    });
  }

  // Plain text from an HTML string (parsed inertly — nothing is executed or inserted).
  function textFromHtml(html){
    var doc = new DOMParser().parseFromString(String(html || ''), 'text/html');
    return (doc.body.textContent || '').replace(/\s+/g, ' ').trim();
  }

  /* =========================================================
     BLOGS (live from Medium)
  ========================================================= */
  var blogs = null;

  function mediumUser(){
    return String(SITE.medium || '').replace(/^@/, '');
  }

  function normalizeBlog(raw){
    if(!raw || !/^https:\/\//.test(raw.link || '')) return null;
    var when = String(raw.pubDate || '');
    var d = new Date(/^\d{4}-\d{2}-\d{2} /.test(when) ? when.replace(' ', 'T') + 'Z' : when);
    var thumb = /^https:\/\/(cdn-images-\d+\.medium\.com|miro\.medium\.com)\//.test(raw.thumbnail || '') ? raw.thumbnail : '';
    var excerpt = String(raw.excerpt || '').trim();
    if(excerpt.length > 200) excerpt = excerpt.slice(0, 200).replace(/\s+\S*$/, '') + '…';
    var link = String(raw.link).split('?')[0];
    return {
      id: link.split('/').pop().replace(/[^a-z0-9-]/gi, '').slice(-40) || 'post',
      title: String(raw.title || 'Untitled'),
      link: link,
      date: isNaN(d) ? '' : d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      thumbnail: thumb,
      excerpt: excerpt,
      minutes: Math.max(1, parseInt(raw.minutes, 10) || 1)
    };
  }

  // Shape of https://api.rss2json.com items → shape of /api/medium items.
  function fromRss2json(item){
    var text = textFromHtml(item.content || item.description);
    return {
      title: item.title,
      link: item.link,
      pubDate: item.pubDate,
      thumbnail: item.thumbnail || ((item.content || '').match(/<img[^>]+src="([^"]+)"/) || [])[1],
      excerpt: text.slice(0, 260),
      minutes: Math.ceil(text.split(' ').length / 225)
    };
  }

  function blogCard(b, i){
    var cover = b.thumbnail
      ? '<div class="article-card__cover article-card__cover--img"><img src="' + escapeHtml(b.thumbnail) + '" alt="" loading="lazy" decoding="async"></div>'
      : '<div class="article-card__cover" style="background:' + ARTICLE_COVERS[i % ARTICLE_COVERS.length] + '" aria-hidden="true">' + icon('note', 30) + '</div>';
    return '<a class="article-card article-card--link" href="' + escapeHtml(b.link) + '" target="_blank" rel="noopener">' +
      cover +
      '<div class="article-card__body">' +
        '<span class="article-card__label">' + icon('note', 14) + 'Medium</span>' +
        '<span class="article-card__title">' + escapeHtml(b.title) + '</span>' +
        '<span class="article-card__meta">' + (b.date ? b.date + ' · ' : '') + b.minutes + ' min read</span>' +
      '</div>' +
    '</a>';
  }

  function updateBlogCount(){
    var el = document.getElementById('blogCount');
    if(el) el.textContent = blogs ? blogs.length : (mediumUser() ? '–' : NOTES.length);
  }

  // state: undefined (show what we have), 'loading', 'empty' or 'error'.
  function renderBlogs(state){
    var list = document.getElementById('blogsList');
    var profile = 'https://medium.com/@' + escapeHtml(mediumUser());

    if(blogs && blogs.length){
      list.innerHTML = blogs.map(function(b, i){
        return post({ id: 'blog-' + b.id, date: b.date, text: escapeHtml(b.excerpt), body: blogCard(b, i) });
      }).join('') +
      '<a class="timeline-more" href="' + profile + '" target="_blank" rel="noopener">Read more on Medium</a>';
    } else if(state === 'loading'){
      list.innerHTML = '<div class="empty">Loading posts from Medium…</div>';
    } else if(state === 'empty'){
      list.innerHTML = '<div class="empty"><strong>No blog posts yet</strong>New posts on Medium will show up here.</div>';
    } else if(state === 'error'){
      list.innerHTML = '<div class="empty"><strong>Couldn\'t load blog posts</strong>Medium isn\'t responding right now. <a class="hashlink" href="' + profile + '" target="_blank" rel="noopener">Read them on Medium</a>.</div>';
    } else {
      // Medium not connected yet: show the local notes.
      list.innerHTML = NOTES.map(function(n, i){
        return post({ id: 'note-' + i, date: n.date, text: n.excerpt, body: articleCard(n, i) + quoteCard(n.quote) });
      }).join('');
    }
    updateBlogCount();
  }

  function loadMedium(){
    var user = mediumUser();
    if(!user){
      renderBlogs();
      return;
    }
    renderBlogs('loading');
    fetchJSON('/api/medium?user=' + encodeURIComponent(user))
      .then(function(d){ return d.items; })
      .catch(function(){
        // No serverless function (e.g. local preview): use a public RSS-to-JSON service.
        return fetchJSON('https://api.rss2json.com/v1/api.json?rss_url=' + encodeURIComponent('https://medium.com/feed/@' + user))
          .then(function(d){
            if(d.status !== 'ok') throw new Error('rss2json');
            return d.items.map(fromRss2json);
          });
      })
      .then(function(items){
        blogs = (items || []).map(normalizeBlog).filter(Boolean);
        renderBlogs(blogs.length ? undefined : 'empty');
      })
      .catch(function(){ renderBlogs('error'); });
  }

  /* =========================================================
     GITHUB ACTIVITY (pinned post)
  ========================================================= */
  var GH_CACHE_KEY = 'asarekojo-gh-cache';
  var GH_CACHE_MS = 30 * 60 * 1000;
  var LANG_COLORS = {
    HTML: '#e34c26', CSS: '#663399', JavaScript: '#f1e05a',
    TypeScript: '#3178c6', Python: '#3572a5', Other: '#8b949e'
  };

  function githubPinned(){
    return post({
      id: 'pinned-github',
      context: { icon: 'pin', label: 'Pinned' },
      text: "My GitHub, live 📊\n\nWhat I've been shipping lately — pulled straight from GitHub every time you visit.",
      body: '<div class="gh-card" id="ghCard"><div class="gh-card__status">Loading GitHub activity…</div></div>'
    });
  }

  // Keep only what the card needs, so the cache stays small.
  function slimGithub(contrib, repos, profile){
    return {
      days: contrib && Array.isArray(contrib.contributions) ? contrib.contributions : null,
      total: contrib && contrib.total ? contrib.total.lastYear : null,
      repos: Array.isArray(repos)
        ? repos.filter(function(r){ return !r.fork; }).map(function(r){ return { lang: r.language, stars: r.stargazers_count }; })
        : null,
      publicRepos: profile ? profile.public_repos : null
    };
  }

  function loadGithub(){
    var cached = readStore(GH_CACHE_KEY, null);
    if(cached && Date.now() - cached.at < GH_CACHE_MS){
      renderGithub(cached.data);
      return;
    }
    var user = encodeURIComponent(SITE.githubUser);
    Promise.all([
      fetchJSON('https://github-contributions-api.jogruber.de/v4/' + user.toLowerCase() + '?y=last'),
      fetchJSON('https://api.github.com/users/' + user + '/repos?per_page=100&type=owner'),
      fetchJSON('https://api.github.com/users/' + user)
    ].map(function(p){ return p.catch(function(){ return null; }); }))
      .then(function(res){
        var data = slimGithub(res[0], res[1], res[2]);
        if(data.days || data.repos) writeStore(GH_CACHE_KEY, { at: Date.now(), data: data });
        renderGithub(data);
      });
  }

  function langColor(lang){
    return LANG_COLORS[lang] || LANG_COLORS.Other;
  }

  function contributionGraph(days){
    var pad = new Date(days[0].date + 'T00:00:00').getDay();
    var cells = new Array(pad + 1).join('<span class="gh-cell gh-cell--empty"></span>');
    var months = '';
    var lastCol = -3;
    days.forEach(function(d, i){
      var date = new Date(d.date + 'T00:00:00');
      var col = Math.floor((i + pad) / 7);
      var count = +d.count || 0;
      if(date.getDate() === 1 && col - lastCol >= 3){
        months += '<span style="left:' + (col * 13) + 'px">' + date.toLocaleDateString('en-US', { month: 'short' }) + '</span>';
        lastCol = col;
      }
      cells += '<span class="gh-cell" data-level="' + (Math.min(4, +d.level || 0)) + '" title="' +
        count + ' contribution' + (count === 1 ? '' : 's') + ' on ' +
        date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) + '"></span>';
    });
    var weeks = Math.ceil((days.length + pad) / 7);
    return '<div class="gh-graph" role="img" aria-label="Contribution graph for the last year">' +
        '<div class="gh-graph__inner" style="width:' + (weeks * 13 - 3) + 'px">' +
          '<div class="gh-months" aria-hidden="true">' + months + '</div>' +
          '<div class="gh-grid">' + cells + '</div>' +
        '</div>' +
      '</div>' +
      '<div class="gh-legend" aria-hidden="true">Less' +
        [0, 1, 2, 3, 4].map(function(l){ return '<span class="gh-cell" data-level="' + l + '"></span>'; }).join('') +
      'More</div>';
  }

  function languageBreakdown(repos){
    var counts = {}, total = 0;
    repos.forEach(function(r){
      if(!r.lang) return;
      counts[r.lang] = (counts[r.lang] || 0) + 1;
      total++;
    });
    if(!total) return '';
    var langs = Object.keys(counts).sort(function(a, b){ return counts[b] - counts[a]; });
    var rows = langs.slice(0, 4).map(function(l){ return [l, counts[l]]; });
    var other = langs.slice(4).reduce(function(n, l){ return n + counts[l]; }, 0);
    if(other) rows.push(['Other', other]);
    return '<div class="gh-langs">' +
      '<div class="gh-langs__bar">' + rows.map(function(r){
        return '<span style="width:' + (r[1] / total * 100) + '%;background:' + langColor(r[0]) + '"></span>';
      }).join('') + '</div>' +
      '<ul class="gh-langs__list">' + rows.map(function(r){
        return '<li><i style="background:' + langColor(r[0]) + '"></i>' + escapeHtml(r[0]) + ' <span>' + Math.round(r[1] / total * 100) + '%</span></li>';
      }).join('') + '</ul>' +
    '</div>';
  }

  function renderGithub(g){
    var card = document.getElementById('ghCard');
    if(!card) return;
    var url = SITE.links.github;
    if(!g.days && !g.repos){
      card.innerHTML = '<div class="gh-card__status">Couldn\'t load GitHub activity right now. <a class="hashlink" href="' + url + '" target="_blank" rel="noopener">View it on GitHub</a>.</div>';
      return;
    }
    var stars = g.repos ? g.repos.reduce(function(n, r){ return n + (r.stars || 0); }, 0) : null;
    var repoCount = g.publicRepos != null ? g.publicRepos : (g.repos ? g.repos.length : null);
    var stats = [
      [g.total, 'contributions in the last year'],
      [repoCount, 'public repos'],
      [stars, stars === 1 ? 'star' : 'stars']
    ].filter(function(st){ return st[0] != null; });

    card.innerHTML =
      '<div class="gh-card__head">' + icon('github', 18) +
        '<span class="gh-card__user">' + escapeHtml(SITE.githubUser) + '</span>' +
        '<a class="gh-card__link" href="' + url + '" target="_blank" rel="noopener">View on GitHub ' + icon('external', 14) + '</a>' +
      '</div>' +
      '<div class="gh-stats">' + stats.map(function(st){
        return '<div><strong>' + Number(st[0]).toLocaleString('en-US') + '</strong><span>' + st[1] + '</span></div>';
      }).join('') + '</div>' +
      (g.days && g.days.length ? contributionGraph(g.days) : '') +
      (g.repos && g.repos.length ? languageBreakdown(g.repos) : '');

    // Show the most recent weeks first on narrow screens, like GitHub does.
    var scroller = card.querySelector('.gh-graph');
    if(scroller) scroller.scrollLeft = scroller.scrollWidth;
  }

  /* =========================================================
     TRANSLATE BIO (like X's "Translate bio")
  ========================================================= */
  // Used if the translation service is unreachable.
  var FALLBACK_TRANSLATIONS = { en: { '大胆になる!': 'Be bold!' } };

  function languageName(code){
    try { return new Intl.DisplayNames(['en'], { type: 'language' }).of(code); } catch(e){ return code; }
  }

  function translate(text, from, to){
    return fetchJSON('https://api.mymemory.translated.net/get?q=' + encodeURIComponent(text) + '&langpair=' + from + '|' + to)
      .then(function(d){
        var out = d && d.responseData && textFromHtml(d.responseData.translatedText);
        if(!out || d.responseStatus != 200 || /MYMEMORY WARNING/i.test(out)) throw new Error('translate');
        return { text: out, by: 'MyMemory' };
      })
      .catch(function(){
        var known = FALLBACK_TRANSLATIONS[to] && FALLBACK_TRANSLATIONS[to][text];
        if(known) return { text: known, by: null };
        throw new Error('translate');
      });
  }

  function initTranslate(){
    var btn = document.getElementById('translateBio');
    var box = document.getElementById('bioTranslation');
    var source = document.querySelector('#profileBio [data-translatable]');
    if(!source) return;
    var from = (source.getAttribute('lang') || '').split('-')[0];
    var to = (navigator.language || 'en').split('-')[0].toLowerCase();
    if(!from || from === to) return;

    var result = null;
    btn.hidden = false;
    btn.addEventListener('click', function(){
      if(!box.hidden){
        box.hidden = true;
        btn.textContent = 'Translate bio';
        return;
      }
      btn.disabled = true;
      btn.textContent = 'Translating…';
      (result ? Promise.resolve(result) : translate(source.textContent.trim(), from, to))
        .then(function(r){
          result = r;
          box.innerHTML = '<p class="translation__by"></p><p class="translation__text"></p>';
          box.querySelector('.translation__by').textContent = 'Translated from ' + languageName(from) + (r.by ? ' by ' + r.by : '');
          box.querySelector('.translation__text').textContent = r.text;
          box.querySelector('.translation__text').setAttribute('lang', to);
          box.hidden = false;
          btn.textContent = 'Hide translation';
        })
        .catch(function(){
          btn.textContent = 'Translate bio';
          showToast("Translation isn't available right now");
        })
        .then(function(){ btn.disabled = false; });
    });
  }

  /* =========================================================
     RENDER: ABOUT (as a thread)
  ========================================================= */
  function renderAbout(){
    var items = [
      {
        context: { icon: 'reply', label: 'Thread' },
        text: "Hi, I'm Asare Elvis Kojo 👋\n\nComputer Science student and software developer based in Accra, Ghana. A quick thread on who I am and what I do 🧵"
      },
      {
        text: 'I enjoy turning ideas into useful digital products — from websites and APIs to full applications.\n\nWhat I focus on:\n• Software development\n• Web applications\n• APIs\n• Digital products'
      },
      {
        text: 'My stack right now:\n\n' + hashtags(['JavaScript','React','Next.js','Python','Flask','PostgreSQL'])
      },
      {
        text: 'Currently 👇\n\n📚 Learning: system design, properly this time\n🛠 Building: CounselConnect and a Ghana duty calculator\n👀 Interested in: developer tools, API design',
        body: quoteCard({ type: 'project', id: 'counselconnect' })
      },
      {
        text: "That's me. If you're working on something interesting, I'd love to hear about it.",
        body: '<div class="cta-card"><div><strong>Have an idea?</strong><span>Let\'s build something.</span></div>' +
              '<button class="btn btn--invert" type="button" data-open-contact>Get in touch</button></div>'
      }
    ];
    document.getElementById('aboutThread').innerHTML = items.map(function(item, i){
      return post({
        id: 'about-' + i,
        date: i === 0 ? 'Thread' : (i + 1) + '/' + items.length,
        context: item.context,
        text: item.text,
        body: item.body,
        thread: i < items.length - 1
      });
    }).join('');
  }

  /* =========================================================
     PROJECT DETAIL (X post page + self-reply thread)
  ========================================================= */
  function renderProjectDetail(id){
    var p = findProject(id);
    var body = document.getElementById('projectDetailBody');
    var topName = document.getElementById('detailTopName');
    var topSub = document.getElementById('detailTopSub');
    if(!p){
      topName.textContent = 'Post';
      topSub.textContent = 'Not found';
      body.innerHTML = '<div class="empty"><strong>This post doesn\'t exist</strong>Try heading back to the projects list.</div>';
      return;
    }
    var d = p.detail;
    var sections = [
      ['Overview', d.overview],
      ['The problem', d.problem],
      ['What I built', d.built],
      ['Key features', d.features],
      ['Challenges', d.challenges]
    ].filter(function(sec){ return sec[1]; });
    var total = sections.length + (d.learned ? 1 : 0);
    topName.textContent = 'Post';
    topSub.textContent = p.name;
    document.title = p.name + ' — Asare Elvis Kojo';

    var isClient = p.category.indexOf('clients') !== -1;
    var demo = p.demo && p.demo !== '#'
      ? '<a class="btn btn--accent" href="' + p.demo + '" target="_blank" rel="noopener">' + icon('external', 16) + (isClient ? 'Visit website' : 'Live demo') + '</a>'
      : '';
    // Only link GitHub when the project has its own repo, not just the profile.
    var repo = p.github && p.github !== SITE.links.github
      ? '<a class="btn btn--outline" href="' + p.github + '" target="_blank" rel="noopener">' + icon('github', 16) + 'View on GitHub</a>'
      : '';

    var replies = sections.map(function(s, i){
      return post({
        id: 'reply-' + p.id + '-' + i,
        date: p.date,
        text: '<strong class="post__label">' + (i + 1) + '/' + total + ' · ' + s[0] + '</strong>\n' + s[1],
        thread: i < total - 1
      });
    }).join('') + (d.learned ? post({
      id: 'reply-' + p.id + '-learned',
      date: p.date,
      text: '<strong class="post__label">' + total + '/' + total + ' · What I learned</strong>\nIf I had to sum up building ' + p.name + ' in one line:',
      body: quoteCard({ type: 'text', text: '“' + d.learned + '”', date: p.date })
    }) : '');

    body.innerHTML =
      '<article class="post-detail">' +
        '<div class="post-detail__head">' + avatarImg('avatar--sm') +
          '<div class="post-detail__who"><span class="post__name">' + NAME + ' ' + verifiedBadge() + '</span><span class="post__handle">' + HANDLE + '</span></div>' +
          statusPill(p.status) +
        '</div>' +
        '<p class="post-detail__text">' + withTags(p.name + ' — ' + p.desc, p.stack) + '</p>' +
        '<div class="post__media post-detail__media">' + (p.demo && p.demo !== '#' && p.image
          ? '<a href="' + p.demo + '" target="_blank" rel="noopener">' + projectMedia(p) + '</a>'
          : projectMedia(p)) + '</div>' +
        (repo || demo ? '<div class="post-detail__links">' + repo + demo + '</div>' : '') +
        '<div class="post-detail__meta">' + [p.date, 'Project', p.status].filter(Boolean).join(' · ') + '</div>' +
        postActions('project-' + p.id) +
      '</article>' +
      '<div class="replies">' + replies + '</div>';
  }

  /* =========================================================
     POST INTERACTIONS (delegated for every timeline)
  ========================================================= */
  function toggleFlag(btn, store, key){
    var id = btn.getAttribute('data-id');
    var on = !store[id];
    if(on){ store[id] = true; } else { delete store[id]; }
    writeStore(key, store);
    btn.classList.toggle('is-on', on);
    btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    var count = btn.querySelector('.action__count');
    if(count) count.textContent = on ? '1' : '';
    return on;
  }

  document.getElementById('main-content').addEventListener('click', function(e){
    var tag = e.target.closest('.hashtag');
    if(tag){
      e.preventDefault();
      setQuery(tag.getAttribute('data-tag'));
      location.hash = '#projects';
      return;
    }

    var btn = e.target.closest('[data-action]');
    if(btn){
      var action = btn.getAttribute('data-action');
      if(action === 'reply'){
        openContact();
      } else if(action === 'reply-guest'){
        bodyInput.value = '@' + btn.getAttribute('data-name') + ' ' + bodyInput.value;
        updateComposer();
        bodyInput.focus();
      } else if(action === 'repost'){
        showToast(toggleFlag(btn, reposts, REPOSTS_KEY) ? 'Reposted' : 'Repost undone');
      } else if(action === 'like'){
        toggleFlag(btn, likes, LIKES_KEY);
      } else if(action === 'save'){
        showToast(toggleFlag(btn, saves, SAVES_KEY) ? 'Added to your Bookmarks' : 'Removed from your Bookmarks');
      } else if(action === 'share'){
        var owner = btn.closest('.post[data-href]');
        var hash = owner ? owner.getAttribute('data-href') : (location.hash || '#posts');
        copyText(location.href.split('#')[0] + hash, 'Link copied to clipboard');
      }
      return;
    }

    // Clicking anywhere else on a linked post opens it, like X — unless selecting text.
    var postEl = e.target.closest('.post[data-href]');
    if(postEl && !e.target.closest('a, button') && !String(window.getSelection())){
      location.hash = postEl.getAttribute('data-href');
    }
  });

  /* =========================================================
     GUESTBOOK (Messages page)
  ========================================================= */
  // Fill these in to make messages public — see guestbook.sql for setup.
  // Until then, messages are only saved in each visitor's own browser.
  var GUESTBOOK = {
    supabaseUrl: '',
    supabaseAnonKey: ''
  };
  var GUESTBOOK_LOCAL_KEY = 'asarekojo-guestbook';
  var GUESTBOOK_NAME_KEY = 'asarekojo-guest-name';
  var GUESTBOOK_LAST_KEY = 'asarekojo-guest-last';
  var MAX_NAME = 40;
  var MAX_LEN = 280;
  var MIN_GAP_MS = 30000;
  var RING = 2 * Math.PI * 10;

  var guestbookLive = !!(GUESTBOOK.supabaseUrl && GUESTBOOK.supabaseAnonKey);

  var remoteStore = {
    headers: function(){
      return {
        apikey: GUESTBOOK.supabaseAnonKey,
        Authorization: 'Bearer ' + GUESTBOOK.supabaseAnonKey,
        'Content-Type': 'application/json'
      };
    },
    list: function(){
      return fetch(GUESTBOOK.supabaseUrl + '/rest/v1/messages?select=id,name,body,kind,created_at&order=created_at.desc&limit=100', { headers: this.headers() })
        .then(function(r){ if(!r.ok) throw new Error(r.status); return r.json(); });
    },
    add: function(msg){
      var h = this.headers();
      h.Prefer = 'return=representation';
      return fetch(GUESTBOOK.supabaseUrl + '/rest/v1/messages', { method: 'POST', headers: h, body: JSON.stringify(msg) })
        .then(function(r){ if(!r.ok) throw new Error(r.status); return r.json(); })
        .then(function(rows){ return rows[0]; });
    }
  };

  var localStore = {
    list: function(){ return Promise.resolve(readStore(GUESTBOOK_LOCAL_KEY, [])); },
    add: function(msg){
      var row = { id: 'local-' + Date.now(), name: msg.name, body: msg.body, kind: msg.kind, created_at: new Date().toISOString() };
      writeStore(GUESTBOOK_LOCAL_KEY, [row].concat(readStore(GUESTBOOK_LOCAL_KEY, [])).slice(0, 100));
      return Promise.resolve(row);
    }
  };

  var guestStore = guestbookLive ? remoteStore : localStore;
  var messages = [];
  var messagesLoaded = false;

  // Visitor text is untrusted: always escape before it touches innerHTML.
  function escapeHtml(s){
    return String(s).replace(/[&<>"']/g, function(c){
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function guestColor(name){
    var h = 0;
    for(var i = 0; i < name.length; i++){ h = (h * 31 + name.charCodeAt(i)) % 360; }
    return 'hsl(' + h + ',62%,45%)';
  }
  function guestInitials(name){
    return name.trim().split(/\s+/).slice(0, 2).map(function(w){ return w.charAt(0).toUpperCase(); }).join('') || '?';
  }
  function timeAgo(iso){
    var then = new Date(iso);
    var s = (Date.now() - then.getTime()) / 1000;
    if(isNaN(s)) return '';
    if(s < 60) return 'now';
    if(s < 3600) return Math.floor(s / 60) + 'm';
    if(s < 86400) return Math.floor(s / 3600) + 'h';
    if(s < 604800) return Math.floor(s / 86400) + 'd';
    return then.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  }

  function guestPost(m){
    var name = escapeHtml(m.name);
    return '<article class="post">' +
      (m.kind === 'idea' ? '<div class="post__context">' + icon('bulb', 14) + '<span>Idea</span></div>' : '') +
      '<div class="post__aside"><span class="avatar avatar--sm avatar--guest" style="background:' + guestColor(m.name) + ';color:#fff" aria-hidden="true">' + escapeHtml(guestInitials(m.name)) + '</span></div>' +
      '<div class="post__main">' +
        '<div class="post__head">' +
          '<span class="post__name">' + name + '</span>' +
          '<span class="post__handle">Visitor</span>' +
          '<span class="post__dot">·</span>' +
          '<time class="post__date" datetime="' + escapeHtml(m.created_at) + '">' + timeAgo(m.created_at) + '</time>' +
        '</div>' +
        '<p class="post__text">' + escapeHtml(m.body) + '</p>' +
        '<div class="post__actions post__actions--compact">' +
          '<button class="action action--reply" type="button" data-action="reply-guest" data-name="' + name + '" aria-label="Reply to ' + name + '">' +
            '<span class="action__icon">' + icon('reply', 18) + '</span></button>' +
          toggleButton('like', 'msg-' + escapeHtml(m.id), 'Like', 'heart', likes, true) +
        '</div>' +
      '</div>' +
    '</article>';
  }

  function renderMessages(){
    document.getElementById('messagesList').innerHTML = messages.length
      ? messages.map(guestPost).join('')
      : '<div class="empty"><strong>No messages yet</strong>Be the first to say something.</div>';
  }

  function loadMessages(){
    var list = document.getElementById('messagesList');
    list.innerHTML = '<div class="empty">Loading messages…</div>';
    guestStore.list()
      .then(function(rows){ messages = rows || []; renderMessages(); })
      .catch(function(){
        list.innerHTML = '<div class="empty"><strong>Couldn\'t load messages</strong>Please try again in a moment.</div>';
      });
  }

  var composer = document.getElementById('composer');
  var nameInput = document.getElementById('composerName');
  var bodyInput = document.getElementById('composerBody');
  var postBtn = document.getElementById('composerPost');
  var counter = document.getElementById('composerCounter');
  var composerAvatar = document.getElementById('composerAvatar');

  if(!guestbookLive){
    var gbNote = document.getElementById('guestbookNote');
    gbNote.hidden = false;
    gbNote.textContent = "Preview mode: the guestbook isn't connected yet, so messages are only saved in your own browser.";
  }

  function updateComposer(){
    var name = nameInput.value.trim();
    var left = MAX_LEN - bodyInput.value.length;
    var fill = counter.querySelector('.counter__fill');
    fill.style.strokeDasharray = RING;
    fill.style.strokeDashoffset = RING * Math.max(0, left) / MAX_LEN;
    counter.hidden = !bodyInput.value.length;
    counter.classList.toggle('is-warn', left <= 20);
    counter.classList.toggle('is-full', left <= 0);
    counter.querySelector('.counter__num').textContent = left <= 20 ? left : '';

    composerAvatar.textContent = name ? guestInitials(name) : '?';
    composerAvatar.style.background = name ? guestColor(name) : '';
    composerAvatar.style.color = name ? '#fff' : '';

    postBtn.disabled = !name || !bodyInput.value.trim();

    // Grow the textarea with its content, like X's composer.
    bodyInput.style.height = 'auto';
    bodyInput.style.height = bodyInput.scrollHeight + 'px';
  }

  nameInput.value = readStore(GUESTBOOK_NAME_KEY, '');
  nameInput.addEventListener('input', updateComposer);
  bodyInput.addEventListener('input', updateComposer);
  bodyInput.addEventListener('keydown', function(e){
    if((e.ctrlKey || e.metaKey) && e.key === 'Enter' && !postBtn.disabled) postBtn.click();
  });

  composer.addEventListener('submit', function(e){
    e.preventDefault();
    var name = nameInput.value.trim().slice(0, MAX_NAME);
    var body = bodyInput.value.trim().slice(0, MAX_LEN);
    if(!name || !body) return;
    var kind = composer.querySelector('input[name="kind"]:checked').value;

    // Bots fill the hidden field; pretend it worked and drop it.
    if(composer.elements.website.value){
      bodyInput.value = '';
      updateComposer();
      return;
    }
    if(Date.now() - readStore(GUESTBOOK_LAST_KEY, 0) < MIN_GAP_MS){
      showToast('Give it a few seconds before posting again');
      return;
    }

    postBtn.disabled = true;
    postBtn.textContent = 'Posting…';
    guestStore.add({ name: name, body: body, kind: kind })
      .then(function(row){
        writeStore(GUESTBOOK_NAME_KEY, name);
        writeStore(GUESTBOOK_LAST_KEY, Date.now());
        messages.unshift(row || { id: 'new-' + Date.now(), name: name, body: body, kind: kind, created_at: new Date().toISOString() });
        renderMessages();
        bodyInput.value = '';
        showToast(kind === 'idea' ? 'Thanks for the idea! 💡' : 'Your message was posted');
      })
      .catch(function(){ showToast('Couldn\'t post your message. Please try again.'); })
      .then(function(){
        postBtn.textContent = 'Post';
        updateComposer();
      });
  });

  // "Message" buttons anywhere on the page jump to the composer.
  document.addEventListener('click', function(e){
    var trigger = e.target.closest('[data-compose]');
    if(!trigger) return;
    e.preventDefault();
    location.hash = '#/messages';
    setTimeout(function(){ (nameInput.value.trim() ? bodyInput : nameInput).focus(); }, 60);
  });

  /* =========================================================
     ROUTING — profile (#posts…#about), project (#/project/id), messages (#/messages)
  ========================================================= */
  var profileView = document.getElementById('profileView');
  var profileEl = document.getElementById('profile');
  var VIEWS = {
    profile: profileView,
    project: document.getElementById('projectDetail'),
    messages: document.getElementById('messagesView')
  };
  var DEFAULT_TITLE = document.title;
  var currentView = 'profile';
  var lastTab = 'posts';
  var profileScroll = 0;

  // Scroll position where the tabs bar sits right under the sticky top bar.
  function tabsStickPoint(){
    var topbar = profileView.querySelector('.topbar');
    return profileEl.offsetTop + profileEl.offsetHeight - topbar.offsetHeight;
  }

  function showView(name){
    Object.keys(VIEWS).forEach(function(key){ VIEWS[key].hidden = key !== name; });
    document.body.setAttribute('data-view', name);
  }

  function setActiveNav(name){
    Array.prototype.forEach.call(document.querySelectorAll('[data-nav]'), function(a){
      var on = a.getAttribute('data-nav') === name;
      a.classList.toggle('is-active', on);
      if(on){ a.setAttribute('aria-current', 'page'); } else { a.removeAttribute('aria-current'); }
    });
  }

  function showTab(tab){
    Array.prototype.forEach.call(document.querySelectorAll('.tab'), function(t){
      var on = t.getAttribute('data-tab') === tab;
      t.classList.toggle('is-active', on);
      t.setAttribute('aria-selected', on ? 'true' : 'false');
    });
    TABS.forEach(function(name){
      document.getElementById('panel-' + name).hidden = name !== tab;
    });
    setActiveNav(tab);

    // On narrow screens the tab bar scrolls sideways; keep the active tab visible.
    var bar = document.getElementById('tabs');
    var active = bar.querySelector('.tab.is-active');
    if(active && (active.offsetLeft < bar.scrollLeft || active.offsetLeft + active.offsetWidth > bar.scrollLeft + bar.clientWidth)){
      bar.scrollLeft = active.offsetLeft - 16;
    }
  }

  function handleRoute(){
    var hash = location.hash;
    var project = hash.match(/^#\/project\/([a-z0-9-]+)/i);

    if(project || hash === '#/messages'){
      if(currentView === 'profile') profileScroll = window.scrollY;
      if(project){
        currentView = 'project';
        renderProjectDetail(project[1]);
        setActiveNav('projects');
      } else {
        currentView = 'messages';
        document.title = 'Messages — ' + NAME;
        setActiveNav('messages');
        if(!messagesLoaded){
          messagesLoaded = true;
          loadMessages();
        }
      }
      showView(currentView);
      window.scrollTo(0, 0);
      return;
    }

    var tab = hash.slice(1);
    if(tab === 'notes'){
      // Old links to #notes land on Blogs.
      tab = 'blogs';
      history.replaceState(null, '', '#blogs');
    }
    if(TABS.indexOf(tab) === -1) tab = 'posts';
    var returning = currentView !== 'profile';
    currentView = 'profile';
    lastTab = tab;
    document.title = DEFAULT_TITLE;
    showView('profile');
    showTab(tab);

    // Keep the tabs in view when switching, like X does.
    var stick = tabsStickPoint();
    if(returning){
      window.scrollTo(0, profileScroll);
    } else if(window.scrollY > stick){
      window.scrollTo(0, stick);
    }
  }

  document.getElementById('backToProjects').addEventListener('click', function(){
    location.hash = '#projects';
  });
  document.getElementById('backFromMessages').addEventListener('click', function(){
    location.hash = '#' + lastTab;
  });

  document.getElementById('topbarTitle').addEventListener('click', function(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Clicking the tab/nav you're already on scrolls back to the top.
  document.addEventListener('click', function(e){
    var link = e.target.closest('a[href^="#"]');
    if(link && link.getAttribute('href') === (location.hash || '#posts') && link.matches('[data-nav], .tab, .sidenav__logo')){
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });

  /* =========================================================
     THEME
  ========================================================= */
  var THEME_KEY = 'asarekojo-theme';
  function resolvedTheme(){
    var attr = document.documentElement.getAttribute('data-theme');
    if(attr) return attr;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  function toggleTheme(){
    var next = resolvedTheme() === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem(THEME_KEY, next); } catch(e){}
  }
  Array.prototype.forEach.call(document.querySelectorAll('[data-theme-toggle]'), function(btn){
    btn.addEventListener('click', toggleTheme);
  });

  /* =========================================================
     CONTACT MODAL
  ========================================================= */
  var modal = document.getElementById('contactModal');
  function openContact(){
    if(typeof modal.showModal === 'function'){ modal.showModal(); } else { modal.setAttribute('open', ''); }
  }
  function closeContact(){
    if(typeof modal.close === 'function'){ modal.close(); } else { modal.removeAttribute('open'); }
  }
  // Delegated so buttons rendered later (e.g. inside posts) work too.
  document.addEventListener('click', function(e){
    if(e.target.closest('[data-open-contact]')) openContact();
  });
  modal.querySelector('[data-close-modal]').addEventListener('click', closeContact);
  // Click on the backdrop closes the dialog.
  modal.addEventListener('click', function(e){
    if(e.target === modal) closeContact();
  });

  /* =========================================================
     CLIPBOARD / TOAST
  ========================================================= */
  var toast = document.getElementById('toast');
  var toastTimer = null;
  function showToast(msg){
    toast.textContent = msg;
    toast.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function(){ toast.classList.remove('is-visible'); }, 2400);
  }
  function copyText(text, successMsg){
    if(navigator.clipboard && navigator.clipboard.writeText){
      navigator.clipboard.writeText(text)
        .then(function(){ showToast(successMsg); })
        .catch(function(){ showToast(text); });
    } else {
      showToast(text);
    }
  }
  document.addEventListener('click', function(e){
    if(e.target.closest('[data-copy-email]')) copyText(EMAIL, 'Email copied to clipboard');
  });

  /* =========================================================
     INIT
  ========================================================= */
  renderStats();
  renderFeed();
  renderWork();
  renderProjects();
  loadMedium();
  loadGithub();
  initTranslate();
  renderAbout();
  updateComposer();
  hydrateLinks();
  hydrateIcons(document);
  handleRoute();
  window.addEventListener('hashchange', handleRoute);

})();
