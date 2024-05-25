import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";


const Footer = () => {
  return (
    <footer>
      <div className='footerLinks'>
        <a href="https://github.com/Gowtham852k03" target='_blank'><FaGithub /></a>
        <a href="https://www.linkedin.com/in/gowtham2003/" target='_blank'><FaLinkedin /></a>
        <a href='mailTo:gowtham8052003@gmail.com' target='_blank'><GrMail /></a>
      </div>
    </footer>
  )
}

export default Footer