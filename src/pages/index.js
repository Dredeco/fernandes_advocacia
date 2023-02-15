import Head from 'next/head'
import HeaderLine from '@/pages/components/HeaderLine'

import styles from '@/styles/Home.module.sass'

import Navbar from '@/pages/components/Navbar'
import HomePage from './components/ImageSection'
import About from './components/About'
import ImageSection from './components/ImageSection'

export default function Home() {
  return (
    <>
      <Head>
        <title>Fernandes Advocacia</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <main className={styles.main}>
        <HeaderLine />
        <Navbar />
        <ImageSection />
        <About />
      </main>
    </>
  )
}
