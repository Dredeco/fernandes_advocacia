import React, {useState} from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';

import styles from '@/styles/Navbar.module.sass'

export default function Navbar() {
    let navLinks =[
        {name:"Início",link:"#"},
        {name:"Escritório",link:"#about"},
        {name:"Áreas de Atuação",link:"#actuation"},
        {name: "Advogados", link: "#lawyers"},
        {name:"Contato",link:"#contact"},
      ];
    let socialLinks =[
        {name: "fa-brands fa-linkedin-in", link:"https://www.linkedin.com/in/andrefersouza/"},
        {name: "fa-brands fa-facebook-f", link:"https://www.facebook.com/dredeco"},
        {name: "fa-brands fa-github", link:"https://github.com/Dredeco"},
    ];
      let [open,setOpen]=useState(false);

  return (
    <div className={`${styles.navbar} active`}>
        <span className={styles.logo}>Fernandes Advocacia</span>

        <div className={`${styles.mobile_links} ${open ? "" : styles.close}`}>
            <ul className="">
                {
                navLinks.map((link)=>(
                    <li key={link.name} className={styles.links}>
                        <a onClick={()=>setOpen(!open)} href={link.link} className=''>{link.name}</a>
                    </li>
                ))
                }
            </ul>
        </div>

        <div onClick={()=>setOpen(!open)} className={styles.bars_menu}>
                    {open ? <FaTimes /> : <FaBars />}
        </div>
    </div>
  )
}
