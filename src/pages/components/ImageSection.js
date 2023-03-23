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
      layout='fill'
      width={300}
      height={300}
      objectFit='cover'
      objectPosition='left'
      className={styles.image}
      />
      <div className={styles.imgDesc}>
        <span className={styles.title}>Proteja seus direitos com a ajuda de especialistas em advocacia</span>
        <span className={styles.subtitle}>Conte com a nossa equipe para solucionar seus problemas jurídicos e garantir justiça em todas as áreas do direito.</span>
      </div>
    </div>
  )
}
