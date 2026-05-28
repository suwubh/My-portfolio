// Site content lives here — update this file to change the portfolio.

export const profile = {
  name: "Subhankar Satpathy",
  firstName: "Subhankar",
  lastName: "Satpathy",
  roles: [
    "Full-Stack Developer",
    "Real-Time Systems Builder",
    "Competitive Programmer",
    "LLM Tooling Engineer",
  ],
  tagline:
    "I build production-grade real-time collaborative systems, LLM-powered tooling, and scalable backends.",
  location: "Ranchi, Jharkhand, India",
  email: "subhankarsatpathy69@gmail.com",
  phone: "+91 7377 157671",
  resumeUrl: "https://my-portfolio-suwubh.vercel.app",
  socials: {
    github: "https://github.com/suwubh",
    linkedin: "https://www.linkedin.com/in/subhankar-satpathy",
    twitter: "https://x.com/suwubh",
    chess: "https://www.chess.com/member/shubhoooooo",
    hashnode: "https://hashnode.com/@suwubh",
  },
};

export const heroStats = [
  { value: 600, suffix: "+", label: "DSA Problems Solved" },
  { value: 1769, suffix: "", label: "LeetCode Rating (Knight)" },
  { value: 1459, suffix: "", label: "Codeforces Rating(Specialist)"},
  { value: 2, suffix: "×", label: "Hackathon Wins / Finals" },
];

export const about = {
  intro:
    "I'm a full-stack developer and final-year B.Tech student who fell for code somewhere between circuits and competitive programming — and never looked back.",
  paragraphs: [
    "I specialise in real-time collaborative systems, LLM-powered tooling, and scalable backend architecture. My work spans CRDT-based collaboration, WebSocket infrastructure, vector search, and AI command palettes — built end-to-end with TypeScript, React, Node.js and PostgreSQL.",
    "I care about systems that hold up under load. Every project I ship is load-tested, CI-gated, and measured — latency numbers, test coverage, and usability studies, not just screenshots.",
    "When I'm not shipping, I'm solving algorithmic problems (600+ and counting), playing bullet chess in the global top 1%, or mentoring juniors as Technical Lead of my college's IEEE chapter.",
  ],
  quickFacts: [
    { label: "Based in", value: "Ranchi, India" },
    { label: "Degree", value: "B.Tech ECE '27" },
    { label: "Focus", value: "Real-time & LLM systems" },
    { label: "Open to", value: "SDE Internships & Roles" },
  ],
  education: [
    {
      school: "Birla Institute of Technology, Mesra",
      detail: "B.Tech, Electronics & Communication Engineering",
      period: "2023 — 2027",
      score: "CGPA 8.15 / 10",
    },
    {
      school: "DAV Public School, Pokhariput",
      detail: "Senior Secondary (Class XII), CBSE",
      period: "2022",
      score: "95.4%",
    },
    {
      school: "Nalanda Public School, Cuttack",
      detail: "Secondary (Class X), CBSE",
      period: "2020",
      score: "93.2%",
    },
  ],
};

export const skillGroups = [
  {
    title: "Languages",
    icon: "code",
    items: ["C++", "Java", "TypeScript", "JavaScript (ES6+)", "SQL"],
  },
  {
    title: "Frontend",
    icon: "layout",
    items: ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "SSR", "WebRTC"],
  },
  {
    title: "Backend",
    icon: "server",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "WebSockets",
      "JWT / OAuth",
      "OpenAI API",
      "Groq API",
      "LLM Integration",
    ],
  },
  {
    title: "Databases & DevOps",
    icon: "database",
    items: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Prisma",
      "pgvector",
      "Docker",
      "GitHub Actions",
      "AWS (S3, EC2)",
      "Vercel",
      "Turborepo",
    ],
  },
  {
    title: "CS Fundamentals",
    icon: "cpu",
    items: [
      "Data Structures & Algorithms",
      "OOP",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
      "System Design",
    ],
  },
];

/* tech names rendered as an infinite marquee */
export const marqueeTech = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "Redis",
  "WebSockets",
  "Docker",
  "Prisma",
  "pgvector",
  "Yjs / CRDT",
  "WebRTC",
  "AWS",
  "GitHub Actions",
  "Tailwind CSS",
  "OpenAI API",
];

export const projects = [
  {
    id: "scriblio",
    name: "Scriblio",
    tagline: "AI-Powered Collaborative Whiteboard",
    period: "Sept 2025 — May 2026",
    image: "scriblio",
    accent: "#60a5fa",
    summary:
      "A real-time collaborative whiteboard powered by CRDTs and WebRTC, with a natural-language LLM command palette that turns text prompts into shapes, diagrams and layouts.",
    highlights: [
      "Built real-time collaboration with Yjs CRDTs, WebRTC P2P sync and a custom WebSocket signaling server — k6 load test: 25 concurrent clients exchanged ~9,800 messages over 60s with 0 connection errors.",
      "Designed a 4-service architecture (React client, signaling server, AI command service, Redis presence) containerized with Docker Compose, using hybrid WebRTC + WebSocket transport for offline-tolerant P2P writes.",
      "Shipped a Cmd+K LLM command palette via OpenAI / Groq — a 22-participant study cut median diagram-creation time from 95s to 38s (60% faster), 4.3/5 'would use again'.",
    ],
    metrics: [
      { value: "107ms", label: "Median RTT latency" },
      { value: "0", label: "Connection errors" },
      { value: "60%", label: "Faster diagramming" },
    ],
    tech: [
      "TypeScript",
      "React",
      "Vite",
      "Yjs (CRDT)",
      "y-webrtc",
      "WebSockets",
      "Node.js",
      "Redis",
      "OpenAI / Groq API",
      "Docker",
      "k6",
    ],
    github: "https://github.com/suwubh/Scriblio",
    demo: "https://scriblio-rose.vercel.app",
  },
  {
    id: "chess4nerds",
    name: "Chess4Nerds",
    tagline: "Real-Time Multiplayer Chess Platform",
    period: "Sept 2025 — May 2026",
    image: "chess",
    accent: "#60a5fa",
    summary:
      "A real-time multiplayer chess platform with server-authoritative validation, Elo-band matchmaking, and a from-scratch minimax AI opponent — built to stay fast under load.",
    highlights: [
      "Sustained 110+ concurrent matches at 305 moves/sec with p95 112ms move propagation under k6 load (220 VUs, 60s) — server-authoritative validation via chess.js, async write-behind to Postgres, DB-backed rejoin on reconnect.",
      "Added an optional Redis pub/sub layer relaying game-room broadcasts across WebSocket replicas; shipped GitHub Actions CI running Prisma validation, builds and the engine + rating test suites on every PR.",
      "Built Elo-band matchmaking (±100, widening with wait time) and a from-scratch minimax + alpha-beta AI with MVV-LVA ordering and piece-square tables — easy/medium/hard at search depth 2/3/4.",
    ],
    metrics: [
      { value: "110+", label: "Concurrent matches" },
      { value: "305/s", label: "Moves per second" },
      { value: "112ms", label: "p95 move propagation" },
    ],
    tech: [
      "TypeScript",
      "React.js",
      "Node.js",
      "Express.js",
      "WebSockets",
      "Redis",
      "PostgreSQL",
      "Prisma",
      "Turborepo",
      "GitHub Actions",
    ],
    github: "https://github.com/suwubh/Chess4Nerds",
    demo: "https://chess4-nerds-frontend.vercel.app",
  },
  {
    id: "readhaven",
    name: "ReadHaven",
    tagline: "Social Book Discovery Platform",
    period: "Jan 2026 — May 2026",
    image: "readhaven",
    accent: "#3b82f6",
    summary:
      "A full-stack social reading platform with vector-similarity recommendations, semantic search, and a 7K+ book catalog — built on Next.js 16 with SSR and a tested, CI-gated pipeline.",
    highlights: [
      "Built a social reading platform (Next.js 16 App Router, SSR) with friends/activity feed, posts, shelves, reviews, reading goals and stats dashboards over a 7K+ book catalog seeded from Open Library with ISBN deduplication.",
      "Shipped vector-similarity recommendations using pgvector cosine-distance over an ivfflat index of 384-dim sentence embeddings (all-MiniLM-L6-v2) — exposed via a /discover semantic-search page and 'More like this'.",
      "Authored a Jest suite with 91% line / 88% statement coverage (132 tests, 19 suites) and GitHub Actions CI/CD running lint, typecheck, jest and prod build — shipped with Lighthouse 100 SEO / 90 Accessibility.",
    ],
    metrics: [
      { value: "7K+", label: "Books in catalog" },
      { value: "91%", label: "Test line coverage" },
      { value: "100", label: "Lighthouse SEO" },
    ],
    tech: [
      "Next.js 16",
      "TypeScript",
      "PostgreSQL",
      "pgvector",
      "Prisma",
      "NextAuth",
      "Tailwind CSS",
      "Jest",
      "GitHub Actions",
      "Vercel",
    ],
    github: "https://github.com/suwubh/ReadHaven",
    demo: "https://read-haven-sandy.vercel.app",
  },
];

export const codingProfiles = [
  {
    platform: "LeetCode",
    rank: "Knight",
    rating: "1769",
    note: "Contest rating",
  },
  {
    platform: "Codeforces",
    rank: "Specialist",
    rating: "1459",
    note: "Max rating",
  },
  {
    platform: "CodeChef",
    rank: "3★",
    rating: "1669",
    note: "Max rating",
  },
];

export const achievements = [
  {
    title: "Finalist — Smart India Hackathon 2025",
    detail:
      "National-level hackathon. Shipped a full-stack product end-to-end in a 36-hour sprint.",
    tag: "Hackathon",
  },
  {
    title: "Winner — HackQuest 2025",
    detail:
      "Delivered a complete full-stack application end-to-end within a 24-hour sprint.",
    tag: "Hackathon",
  },
  {
    title: "Rank 171 Globally — CodeChef Starters 216",
    detail: "Top global placement in Division 2 of a rated contest.",
    tag: "Competitive",
  },
  {
    title: "600+ Algorithmic Problems Solved",
    detail:
      "Across LeetCode, Codeforces and CodeChef — consistent contest participation.",
    tag: "Competitive",
  },
  {
    title: "Technical Lead — IEEE Student Chapter, BIT Mesra",
    detail:
      "Led a 5-person dev team on Git-flow, reviewed 20+ PRs, shipped 3 club projects and ran workshops for 80+ students.",
    tag: "Leadership",
  },
  {
    title: "NTSE Scholar · KVPY Fellow",
    detail:
      "National merit-based scholarships. Ranked top 1% globally on Chess.com (1750 Elo).",
    tag: "Honors",
  },
];

export const statCounters = [
  { value: 600, suffix: "+", label: "Problems solved" },
  { value: 20, suffix: "+", label: "PRs reviewed" },
  { value: 3, suffix: "", label: "Production projects" },
  { value: 80, suffix: "+", label: "Students mentored" },
];
