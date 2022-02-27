const projects = [
  {
    default: true,
    id: "intro",
    header: "Welcome, I'm Elijah.",
    subheader: "Full-stack developer",
    desc: "A developer based out of Milwaukee building complete applications for a wide variety of businesses.",
    buttons: [
      { text: "Random project", function: "random" },
      {
        text: "Github",
        href: "https://github.com/elijahharry/",
        target: "_blank",
      },
    ],
    colors: {
      // primary: "#c7ff2e",
      primary: "#21c29c",
      secondary: "#662eff",
    },
  },
  {
    id: "treatable",
    subheader: "Telemed",
    header: "Treatable",
    desc: "Project involves a large pre-existing codebase and team of developers. Hired to improve the design of and finish building out multiple portions of their site (/checkout, /account, /labs/std, /providers & more).",
    logo: "treatable.svg",
    domain: "treatable.org",
    buttons: [
      {
        text: "Provider Pages",
        href: "https://www.treatable.org/providers",
        target: "_blank",
      },
      {
        text: "Landing Page",
        href: "https://www.treatable.org/hcp",
        target: "_blank",
      },
    ],
    featured: 2,
    mockups: { prefix: "treatable", count: 4, type: "png" },
    colors: {
      primary: "#94d8eb",
      secondary: "#699eca",
    },
    tech: ["next", "react", "mui"],
  },
  {
    id: "storkies",
    header: "Storkies Merch",
    subheader: "eCommerce clothing",
    desc: "Frontend made with NextJS. Utilizes Shopify Storefront API to provide a product/order management dashboard and secure checkout for merch sales. NodeJS backend for uploading and processing photos utilized in collages across the site.",
    logo: "storkies.svg",
    domain: "storkiesflyhigh.com",
    mockups: { prefix: "storkies", count: 5, type: "png" },
    // featured: { src: "storkies-1.png" },
    colors: {
      primary: "#F49302",
      secondary: "#3d84e0",
    },
    tech: ["next", "react", "node", "mongo", "shopify", "graphql", "auth0"],
    buttons: [
      {
        text: "Review site",
        href: "https://storkiesflyhigh.com/",
        target: "_blank",
      },
      {
        text: "Github",
        function: "github",
        client: "https://github.com/elijahharry/storkies_client",
        server: "https://github.com/elijahharry/storkies_server",
      },
    ],
  },

  {
    id: "distroave",
    subheader: "Cannabis Distributor",
    header: "DistroAve Lounge",
    domain: "distroave.co",
    desc: "Built a dashboard for the display of cannabis strains & relevant facts/stats. Includes a admin dashboard for adding/managing strains, and a NodeJS backend to the dynamic portions a reality. Rolled my own auth for this project.",
    logo: "distro.svg",
    buttons: [
      {
        text: "Review site",
        href: "https://distroave-frontend.vercel.app/buyers",
        target: "_blank",
      },
      {
        text: "Github",
        href: "https://github.com/elijahharry/distro_ave",
        target: "_blank",
      },
    ],
    // featured: { src: "distro-1.png" },
    mockups: { prefix: "distro", count: 4, type: "png" },
    colors: {
      primary: "#46b652",
      secondary: "#8848e8",
    },
    tech: ["next", "react", "node", "mongo"],
  },
  {
    id: "alphasocial",
    subheader: "Finance Influencers",
    header: "Alpha Social Group",
    domain: "alphasocialgroup.com",
    desc: "Built for a social media marketing firm within the finance space. Instead of using default Twitter embeds to display top tweets from their accounts, I created a backend that accesses the Twitter API, and if a URL is linked to within the tweet, scrapes and downloads Open Graph preview images for display on the frontend.",
    logo: "alpha.svg",
    // featured: { src: "alphasoc-1.png" },
    mockups: { prefix: "alpha", count: 3, type: "png" },
    colors: {
      primary: "#55dde7",
      secondary: "#1083e1",
    },
    tech: ["next", "react", "node", "mongo", "twitter"],
    buttons: [
      {
        text: "Review site",
        href: "https://alphasocialgroup.com/",
        target: "_blank",
      },
      {
        text: "Github",
        function: "github",
        client: "https://github.com/elijahharry/alphasocial_client",
        server: "https://github.com/elijahharry/alphasocial_server",
      },
    ],
  },
  {
    id: "turnkey",
    header: "TurnKey Diagnostics",
    subheader: "Diagnostics Company",
    domain: "turnkeytests.com",
    desc: "Relatively static website. Utilizes Wordpress as a headless CMS, client can create their own blog posts within the Wordpress dashboard, which then pulled via GraphQL queries and displayed via NextJS' Incremental Static Regeneration.",
    logo: "turnkey.svg",
    // featured: { src: "turnkey-1.png" },
    mockups: { prefix: "turnkey", count: 4, type: "png" },
    tech: ["next", "react", "graphql"],
    colors: {
      primary: "#caa45d",
      secondary: "#194578",
    },
    buttons: [
      {
        text: "Review site",
        href: "https://turnkeytests.com/",
        target: "_blank",
      },
      {
        text: "Github",
        href: "https://github.com/elijahharry/turnkeydiag_client",
        target: "_blank",
      },
    ],
  },
];

export default projects;
