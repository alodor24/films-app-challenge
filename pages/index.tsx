import NavbarApp from "@/components/NavbarApp";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>The Movie App | Challenge</title>
      </Head>
      <NavbarApp />
      <main>
        <p>Hello world</p>
      </main>
    </>
  );
}
