import Head from "next/head";

const Header = () => {
  return (
    <Head>
      <title>Elijah Harry | Web Developer</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/fav/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/fav/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/fav/favicon-16x16.png"
      />
      <link rel="manifest" href="/fav/site.webmanifest" />
      <link rel="mask-icon" href="/fav/safari-pinned-tab.svg" color="#222222" />
      <link rel="shortcut icon" href="/fav/favicon.ico" />
      <meta name="msapplication-TileColor" content="#2a2a2a" />
      <meta name="msapplication-config" content="/fav/browserconfig.xml" />
      <meta name="theme-color" content="#ffffff" />
      <meta property="og:url" content="https://www.elijahharry.com/" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Hi, I'm Elijah: Full-Stack Developer in Milwaukee, WI."
      />
      <meta name="twitter:card" content="summary" />
      <meta
        property="og:description"
        content="Check out my portfolio for projects, repos and more. I keep a heavy focus on frontend and design, specifically within React or React frameworks like NextJS."
      />
      <meta property="og:image" content="/img/preview.png" />
    </Head>
  );
};

export default Header;
