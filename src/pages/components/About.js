import React from 'react'
import Image from 'next/image'

import styles from '@/styles/About.module.sass'
import bgImage from '../../../public/image2.jpg'

export default function About() {
  return (
    <div id='about' className={styles.about}>
        <h1>O Escritório</h1>
        <strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac lacinia purus. Aenean eget dapibus magna. Pellentesque nec lacus sit amet nunc aliquam mattis eleifend nec nisi. Duis ac risus sit amet enim fringilla interdum at sed metus. Integer sed eros eu erat venenatis mollis. Aliquam et nisi tempus, fermentum augue vel, ultricies sem</strong>
        <p>Praesent ut sollicitudin dolor, at condimentum ante. Proin accumsan massa id libero semper sollicitudin. Curabitur in tristique nibh. Vestibulum ut ultrices purus, vitae vestibulum ex. Morbi venenatis iaculis urna, non venenatis ipsum congue nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
          Vestibulum ut sodales turpis. Duis ligula nulla, tristique vitae lorem non, vestibulum dapibus libero. Integer condimentum sollicitudin dui, vitae pretium lectus commodo vitae. 
          <br /><br /> Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed tincidunt ex ut dolor faucibus, non mattis neque aliquet. Fusce fermentum eu nulla vitae sodales. Integer augue neque, aliquam eget tincidunt eget, mollis nec lectus.
        </p>
      <Image 
      src={bgImage}
      layout='responsive'
      />
    </div>
  )
}
