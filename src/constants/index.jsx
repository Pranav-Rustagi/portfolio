export const myProjects = [
  {
    id: "chatsy",
    title: "Chatsy",
    short_description: "A real-time web-based messaging app designed for secure, seamless, and modern communication.",
    description: "Chatsy is a modern web-based messaging product that delivers real-time, privacy-aware communication without compromising usability. Designed for everyday use, it combines core chat functionality with features like AI-assisted interaction and request-based messaging, allowing users to connect securely—even with people outside their contact list. With flexible sign-in options and a username-first identity model, Chatsy avoids reliance on phone numbers and minimizes data retention by design. It’s built to offer a secure, responsive, and scalable communication experience across platforms.",
    subDescription: [
      "Real-time, low-latency messaging for individual and group conversations",
      "Privacy-centric architecture with minimal data retention and username-based identity",
      "Controlled connection requests enabling secure outreach to non-contacts",
      "Integrated AI-assisted chat functionality to enhance user interactions",
      "Flexible authentication powered by Firebase Auth with Google, Facebook, and email support"
    ],
    links: [],
    logo: "",
    image: "/assets/projects/coming-soon.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/logos/next.svg",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/logos/typescript.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 5,
        name: "Node.js",
        path: "/assets/logos/node.svg",
      },
      {
        id: 6,
        name: "Express.js",
        path: "/assets/logos/express.svg",
      },
      {
        id: 7,
        name: "WebSockets",
        path: "/assets/logos/websockets.svg",
      },
      {
        id: 8,
        name: "Firebase",
        path: "/assets/logos/firebase.svg",
      },
    ],
    status: "in-progress"
  },
  {
    id: "highlight-plus",
    title: "Highlight Plus",
    short_description: "A flexible, lightweight React syntax highlighter with built-in support for custom word and token highlighting.",
    description: "Highlight‑Plus is a lightweight React component built on top of react-highlight that enhances syntax-highlighted code blocks with customizable word-level highlighting. It allows you to emphasize specific keywords, variables, or tokens with any CSS color, while preserving full support for multiple languages via highlight.js",
    subDescription: [
      "Built on react-highlight, so it supports syntax highlighting across many programming languages.",
      "Highlight specific words or tokens within the code with ease.",
      "Fully customizable highlight colors, supporting all valid CSS values (hex, RGB, RGBA, HSL, HSLA, named colors).",
      "Lightweight and focused, perfect for readonly code display scenarios.",
    ],
    links: [{
      href: "https://github.com/Pranav-Rustagi/highlight-plus",
      type: "github"
    }, {
      href: "https://www.npmjs.com/package/highlight-plus",
      type: "npm"
    }, {
      href: "https://dev.to/pranav-rustagi/introducing-highlight-plus-supercharged-syntax-highlighting-for-react-1gb6",
      type: "devto"
    }],
    logo: "/assets/projects/highlight-plus.png",
    image: "/assets/projects/highlight-plus.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "TypeScript",
        path: "/assets/logos/typescript.svg",
      },
      {
        id: 3,
        name: "NPM",
        path: "/assets/logos/npm.svg",
      }
    ],
    status: "completed"
  }, {
    id: "youtube-jedi",
    title: "YouTube Jedi",
    short_description: "A Node.js CLI tool to download YouTube videos and playlists with flexible, flag-based configuration.",
    description: "youtube-jedi is a powerful Node.js command-line tool that lets you download YouTube videos and playlists with ease. It supports flexible configuration through simple flags, allowing you to choose between audio or video downloads, set quality levels, and more—all in a single command. Built for speed, clarity, and cross-platform use, it’s ideal for developers, power users, and automation workflows.",
    subDescription: [
      "Download individual YouTube videos or entire playlists from the command line with ease",
      "Customize downloads by selecting audio-only or video formats, with control over quality and output",
      "Process playlists sequentially, downloading one video at a time for reliability",
      "Cross-platform compatibility across Windows, macOS, and Linux"
    ],
    links: [{
      href: "https://github.com/Pranav-Rustagi/youtube-jedi",
      type: "github"
    }, {
      href: "https://www.npmjs.com/package/youtube-jedi",
      type: "npm"
    }],
    logo: "/assets/projects/youtube-jedi.png",
    image: "/assets/projects/youtube-jedi.png",
    tags: [
      {
        id: 1,
        name: "Node.js",
        path: "/assets/logos/node.svg",
      },
      {
        id: 2,
        name: "NPM",
        path: "/assets/logos/npm.svg",
      }
    ],
    status: "completed"
  }
];

export const mySocials = [
  {
    name: "GitHub",
    href: "https://www.github.com/Pranav-Rustagi/",
    icon: "/assets/socials/github.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/pranav-rustagi/",
    icon: "/assets/socials/linkedin.svg",
  },
  {
    name: "StackOverflow",
    href: "https://stackoverflow.com/users/14046126/pranav-rustagi",
    icon: "/assets/socials/stackoverflow.svg",
  },
  {
    name: "Dev.to",
    href: "https://dev.to/pranav-rustagi",
    icon: "/assets/socials/devto.svg",
  }
];

export const experiences = [
  {
    title: "Software Engineer",
    job: "Data Migration",
    company: "Genpact",
    date: "Oct 2024 - Present",
    contents: [
      "Migrated 100+ ETL jobs to Databricks by converting Talend workflows and PostgreSQL transformation logic — ensuring data integrity, and enhancing performance across enterprise pipelines.",
      "Automated the conversion of PostgreSQL ETL components into Databricks SQL notebooks using Python — improving throughput by 60% and minimizing manual effort.",
      "Generated lineage mappings from Orion Governance by applying graph traversal on component-level dependencies — improving traceability by 35% and accelerating root-cause analysis during ETL migration.",
      "Built a real-time React dashboard to track data migration from Greenplum to Databricks with unified filters for overall, domain, and ingestion progress — reducing reporting delays by 85%.",
    ],
  },
  {
    title: "Software Engineer (Internship)",
    job: "Data Engineering & Gen AI",
    company: "Genpact",
    date: "Feb 2024 - Jul 2024",
    contents: [
      "Designed and built a cloud-based data lake on AWS S3 to centralize ingestion from multiple healthcare data sources. Automated and scheduled workflows using Apache Airflow, with dedicated pipelines for each source.",
      "Enabled large-scale analytics on over 2 million SPARCS records, generating business insights to support data-driven decision-making around cost, resource allocation, and revenue optimization.",
      "Trained and deployed a regression model with MLflow to predict patient stay duration, achieving an RMSE of 2.69 and R² of 0.91 — improving operational decision-making.",
      "Developed an AI-based data discrepancy detection system for PDF invoices, supporting single and batch uploads with structured data extraction.",
      "Optimized AI validation costs by using fuzzy matching to narrow down relevant data, significantly reducing token consumption while improving result accuracy."
    ],
  },
  {
    title: "Full-Stack Developer (Freelance)",
    job: "Shopify App Development",
    company: "Codecrux Dev",
    date: "Sep 2021 - May 2023",
    contents: [
      <p>Developed the complete admin panel for the <a href="https://apps.shopify.com/camouflage" className="text-lavender font-semibold tracking-wide px-1 py-1 inline-block">Camouflage</a> using Next.js to centralize merchant configuration and app management.</p>,
      "Integrated dynamic theme detection to ensure seamless behavior across varying Shopify storefront themes.",
      "Implemented custom swatch configuration to resolve functional conflicts caused by third-party swatch apps, ensuring reliable app execution across storefronts.",
      "Built a TypeScript REST API to validate multiple onboarding and configuration checkpoints, providing detailed error feedback to help merchants complete setup successfully.",
      "Ensured full compatibility with all free Shopify 2.0 themes, contributing to a 5-star rating and 170+ positive reviews on the Shopify App Store."
    ],
  },
  {
    title: "Software Developer (Internship)",
    job: "Web App Development",
    company: "iQueue 365",
    date: "Dec 2021 - Jan 2023",
    contents: [
      "Developed the web application for a tech-startup, part of a cross-platform integrated queue management system (iOS, Android, Web) with AI-driven task optimization, using React and Firebase.",
      "Implemented core features including optimal assignment highlighting for efficient task distribution and guest appointment booking via QR code without requiring account creation.",
      "Collaborated with testers and stakeholders in an agile environment, participating in sprints and scrum meetings to deliver new features and resolve bugs efficiently."
    ],
  },
  {
    title: "Software Developer (Internship)",
    job: "Shopify Frontend Development",
    company: "Gypsyphi",
    date: "Jul 2020 - Oct 2020",
    contents: [
      "Revamped the UI for multiple Shopify storefronts, enhancing visual consistency and improving customer engagement by ~20%.",
      <p>Designed and developed the homepage for <a href="https://stockyphi.com/" className="text-lavender font-semibold tracking-wide px-1 py-1 inline-block">Stockyphi</a>, ensuring responsive layout, clean UX, and fast load performance.</p>,
      <p>Built a product customizer for <a href="https://www.souleway.com/" className="text-lavender font-semibold tracking-wide px-1 py-1 inline-block">Souleway</a>, allowing users to personalize weekender components (e.g., torso, handle), increasing product interaction by 25%.</p>,
      "Engineered a merchant dashboard to configure product-specific customization options with images, enabling dynamic, component-level personalization on the storefront."
    ]
  }
];
export const reviews = [
  {
    name: "Sandeep Thakur",
    profile_link: "https://www.linkedin.com/in/sandeep-thakur-96a378143",
    profile_image: "assets/testimonials/1642838093709.jpeg",
    role: "Software Engineer",
    body: "I highly recommend Pranav for his outstanding work for our web app in our organization. His expertise and dedication have been invaluable to our projects. He consistently delivers top-notch solutions and stays up-to-date with the latest developments in the field. A true asset to any team."
  },
  {
    name: "Raj Kumar",
    profile_link: "https://www.linkedin.com/in/raj-kumar-b5a203100/",
    profile_image: "assets/testimonials/1669126190789.jpeg",
    role: "Shopify App Dev | Camouflage Shopify App | Backend & React",
    body: "Pranav worked on a variety of projects in short span. The UI and functionalities added to the web apps are top notch! A true rising star!!"
  }
];
