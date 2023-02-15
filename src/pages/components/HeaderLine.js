import React from 'react'
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa'
import {GrMail} from 'react-icons/gr'

import styles from '@/styles/HeaderLine.module.sass'

export default function Line() {
  return (
    <div className={styles.header_line}>
      <span><FaPhoneAlt /> (22) 2700-0000 / <FaWhatsapp /> (22) 99797-1144 | <GrMail /> fernandes@adv.com.br</span>
    </div>
  )
}
