import React from 'react'
import Image from 'next/image'

import styles from '@/styles/About.module.sass'
import bgImage from '../../../public/image2.jpg'

export default function About() {
  return (
    <div id='about' className={styles.about}>
        <h1>O Escritório</h1>
        <div className={styles.aboutGrid}>
          <div className={styles.aboutDescription}>
            <strong>O nosso escritório de advocacia preza pela atuação humanizada, profissional, transparente e diligente.<br /><br /> Buscamos sempre atender o cliente de forma personalizada, entendendo cada detalhe do caso e analisando a melhor estratégia para atendê-lo.</strong>
            <p>
            Nosso objetivo é realizar uma atuação eficaz e que resolva as suas questões da maneira mais satisfatória possível, enviando relatórios sobre o andamento das demandas e visando sempre a solução mais acertiva para os casos.
            </p>
          </div>
          <Image 
          src={bgImage}
          layout='responsive'
          />
      </div>
    </div>
  )
}
