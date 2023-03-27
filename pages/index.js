import Head from "next/head";

function HomePage() {
  console.log("[HomePage] render");
  return (
    <>
      <Head>
        <title>My Next App Blog</title>
        <meta name="description" value="This is my blog" />
      </Head>
      <main>
        <h1>Home Page</h1>
        <ul>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
          <li>Four</li>
        </ul>
      </main>
    </>
  );
}

export default HomePage;
