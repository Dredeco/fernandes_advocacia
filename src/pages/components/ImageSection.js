import Image from 'next/image'
import React from 'react'
import bgImage from '../../../public/image4.jpg'

import styles from '@/styles/ImageSection.module.sass'

export default function ImageSection() {
  return (
    <div id='home' className={styles.ImageSection}>
      <Image 
      src={bgImage}
      alt="backgrund"
      layout='responsive'
      />
      <div className={styles.imgDesc}>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac lacinia purus. Aenean eget dapibus magna.
        Interdum et malesuada fames ac ante ipsum primis in faucibus.
        </span>
      </div>
    </div>
  )
}
