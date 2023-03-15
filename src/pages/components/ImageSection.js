import Image from 'next/legacy/image'
import React from 'react'
import bgImage from '../../../public/image4.jpg'

import styles from '@/styles/ImageSection.module.sass'

export default function ImageSection() {
  return (
    <div id='home' className={styles.ImageSection}>
      <Image 
      src={bgImage}
      alt="background image"
      layout='responsive'
      width={300}
      height={300}
      objectFit='cover'
      objectPosition='left'
      className={styles.image}
      />
      <div className={styles.imgDesc}>
        <span>Ética, profissionalismo, transparencia e cliente satisfeito.
        </span>
      </div>
    </div>
  )
}
