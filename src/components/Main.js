import Head from "next/head";

const Main = ({ children }) => {
  return (
    <>
      <Head>
        <title>Elijah Harry | Web Developer</title>
      </Head>
      <main>{children}</main>
    </>
  );
};

export default Main;
