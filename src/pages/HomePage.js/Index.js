import Image from 'next/image'
import React from 'react'
import bgImage from '../../../public/image4.jpg'

import styles from '@/styles/HomePage.module.sass'

export default function HomePage() {
  return (
    <>
      <Image 
      src={bgImage}
      alt="backgrund"
      layout='responsive'
      />
      <div className={styles.imgDesc}>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac lacinia purus. Aenean eget dapibus magna.</span>
      </div>
    </>
  )
}
