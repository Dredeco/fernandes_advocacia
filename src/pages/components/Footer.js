import React from 'react'

import styles from "@/styles/Footer.module.sass"

export default function Footer() {
  return (
    <div className={styles.footer}>
      <p>© 2023 Fernandes Advocacia. Todos os direitos reservados.</p>
      <p>Desenvolvido por: <a target='_blank' href='https://dredeco.github.io/portfolio-page/'>André Fernandes</a></p>
    </div>
  )
}
