import React from 'react'
import Image from 'next/legacy/image'

import styles from '@/styles/About.module.sass'
import bgImage from '../../../public/image2.jpg'

export default function About() {
  return (
    <div id='about' className={styles.about}>
        <h1>O Escritório</h1>
        <div className={styles.aboutGrid}>
          <div className={styles.aboutDescription}>
            <span>O nosso escritório de advocacia preza pela atuação humanizada, profissional, transparente e diligente.<br /><br /> Buscamos sempre atender o cliente de forma personalizada, entendendo cada detalhe do caso e analisando a melhor estratégia para atendê-lo.
            <br /><br />
            Nosso objetivo é realizar uma atuação eficaz e que resolva as suas questões da maneira mais satisfatória possível, enviando relatórios sobre o andamento das demandas e visando sempre a solução mais acertiva para os casos.</span>
          </div>
          <div className={styles.imgLayer}>
            <Image 
              src={bgImage}
              layout='fill'
              width='300'
              height='300'
              objectFit='cover'
              objectPosition='top center'
            />
          </div>
      </div>
    </div>
  )
}
