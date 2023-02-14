import React from 'react'
import Image from 'next/image'

import styles from '@/styles/About.module.sass'
import bgImage from '../../../public/image2.jpg'

export default function About() {
  return (
    <div className={styles.about}>
        <h1>O Escritório</h1>
        <strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac lacinia purus. Aenean eget dapibus magna. Pellentesque nec lacus sit amet nunc aliquam mattis eleifend nec nisi. Duis ac risus sit amet enim fringilla interdum at sed metus. Integer sed eros eu erat venenatis mollis. Aliquam et nisi tempus, fermentum augue vel, ultricies sem</strong>
        <p>Praesent ut sollicitudin dolor, at condimentum ante. Proin accumsan massa id libero semper sollicitudin. Curabitur in tristique nibh. Vestibulum ut ultrices purus, vitae vestibulum ex. Morbi venenatis iaculis urna, non venenatis ipsum congue nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum ut sodales turpis. Duis ligula nulla, tristique vitae lorem non, vestibulum dapibus libero.
Integer condimentum sollicitudin dui, vitae pretium lectus commodo vitae. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed tincidunt ex ut dolor faucibus, non mattis neque aliquet. Fusce fermentum eu nulla vitae sodales. Integer augue neque, aliquam eget tincidunt eget, mollis nec lectus. Praesent dictum felis nec arcu condimentum ultrices nec quis erat. Aliquam vestibulum gravida maximus. Maecenas purus sapien, feugiat quis condimentum in, tempor sed nisi. Proin condimentum arcu sit amet iaculis aliquet. Sed ultricies vulputate turpis nec ultricies. Suspendisse eleifend felis quis erat commodo, a posuere nunc molestie. Aliquam et purus sit amet eros dictum viverra. Praesent gravida tincidunt nisi at malesuada. Donec in massa in mi dignissim aliquet. Morbi varius molestie nunc, eget porta erat dapibus id. Cras rutrum mattis sagittis.</p>
      <Image 
      src={bgImage}
      layout='responsive'
      />
    </div>
  )
}
