import Head from "next/head";
import Navbar from "../components/Navbar";
import Properties from "./Properties";
import Landing from "./Landing";

export default function Home() {
  return (
    <>
      <Head>
        <title>Xircus | with Components</title>
        <meta name="description" content="Template created by Xircus" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Navbar />
      <Landing />
      <Properties />
    </>
  );
}
