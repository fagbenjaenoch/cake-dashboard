import Head from "next/head";
import Image from "next/image";

import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cake Dashboard</title>
        <meta name="description" content="Cake Dashboard, built with next js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <Header />
      </main>
    </>
  );
}
