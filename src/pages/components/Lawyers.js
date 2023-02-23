import React from 'react'
import Image from 'next/image'

import Lawer1 from '../../../public/lawyer1.jpg'
import Lawer2 from '../../../public/lawyer2.jpg'

import styles from '@/styles/Lawyers.module.sass'

export default function Lawyers() {

    const lawyers = [
        {name: "André Fernandes", oab: "OAB/XX: XXX.XXX", image: Lawer1},
        {name: "Luiz Fernandes", oab: "OAB/XX: XXX.XXX", image: Lawer2},
    ]
  return (
    <div id='lawyers' className={styles.lawyers}>
        <h1>Advogados</h1>
        <p>Conheça os advogados da Fernandes Advocacia</p>

        <div className={styles.lawyers_wrapper}>
            {lawyers.map((lawyer) => (
                <div className={styles.lawyer_card}>
                    <Image src={lawyer.image} className={styles.lawyer_image}/>
                    <div className={styles.lawer_description}>
                        <h2>{lawyer.name}</h2>
                        <span>{lawyer.oab}</span>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
