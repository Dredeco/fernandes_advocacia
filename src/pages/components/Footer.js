import React from 'react'

import styles from "@/styles/Footer.module.sass"

export default function Footer() {
  return (
    <div className={styles.footer}>
      <p>© 2023 Fernandes Advocacia. Todos os direitos reservados.</p>
      <p>Desenvolvido por: <a href='/'>André Fernandes</a></p>
    </div>
  )
}
