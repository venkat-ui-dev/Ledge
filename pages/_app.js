import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ledge — Time tracking and invoicing for freelancers</title>
        <meta
          name="description"
          content="Ledge turns tracked hours into professional invoices in seconds. Built for freelance developers and designers."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
