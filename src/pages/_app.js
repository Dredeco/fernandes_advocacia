import Head from 'next/head'

import '@/styles/globals.sass'

export default function App({ Component, pageProps }) {
  return (<>
      <Head>
        <title>Fernandes Advocacia</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Lato:wght@300;400;700&display=swap" rel="stylesheet"></link>
      </Head>
      <Component {...pageProps} />
  </>)
}
