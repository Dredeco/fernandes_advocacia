import React, {useState} from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';

import styles from '@/styles/Navbar.module.sass'

export default function Navbar() {
    let navLinks =[
        {name:"Início",link:"#home"},
        {name:"Habilidades",link:"#skills"},
        {name:"Projetos",link:"#projects"},
        {name:"Contato",link:"#contact"},
      ];
    let socialLinks =[
        {name: "fa-brands fa-linkedin-in", link:"https://www.linkedin.com/in/andrefersouza/"},
        {name: "fa-brands fa-facebook-f", link:"https://www.facebook.com/dredeco"},
        {name: "fa-brands fa-github", link:"https://github.com/Dredeco"},
    ];
      let [open,setOpen]=useState(false);

  return (
    <div>
        <span>Fernandes Advocacia</span>

        <div className={`${styles.navLinks} ${open ? styles.open : styles.close}`}>
            <ul className="flex flex-col relative w-full transition-all duration-500">
                {
                navLinks.map((link)=>(
                    <li key={link.name} className='relative px-2 text-xl w-full'>
                        <a onClick={()=>setOpen(!open)} href={link.link} className='flex py-3 border lg:border-none border-zinc-800 justify-center w-full h-full bg-black hover:bg-green-700 lg:hover:bg-black lg:hover:text-green-600 duration-500'>{link.name}</a>
                    </li>
                ))
                }
            </ul>
        </div>

        <div onClick={()=>setOpen(!open)} className=''>
                    {open ? <FaTimes /> : <FaBars />}
        </div>
    </div>
  )
}
