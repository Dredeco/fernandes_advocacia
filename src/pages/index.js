import Head from 'next/head'
import HeaderLine from '@/pages/components/HeaderLine'

import styles from '@/styles/Home.module.sass'

import Navbar from '@/pages/components/Navbar'
import HomePage from './components/ImageSection'
import About from './components/About'
import ImageSection from './components/ImageSection'
import Actuation from './components/Actuation'
import Lawyers from './components/Lawyers'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <HeaderLine />
        <Navbar />
        <ImageSection />
        <About />
        <Actuation />
        <Lawyers />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
