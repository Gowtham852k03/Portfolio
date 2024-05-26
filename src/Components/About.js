import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Spaceboy from '../images/into.gif';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Gowtham</b>, and I am from Chennai, India.
            I am a dedicated <b>Web Developer</b> and <b>UI/UX Designer</b> currently in my final year of pursuing a <b>B.E in Computer Science and Engineering</b>.<br /><br />
            I have gained valuable experience through internships as a <b>Web Developer</b> at <b>VBIND</b> and <b>EAGLE TECH</b>, a dynamic tech startup.<br />
            My passion lies in creating original projects with beautiful designs, and you can explore some of my work in the projects section.<br /><br />
            I am <b>open</b> to new collaborations and opportunities where I can contribute and grow.<br />
            Feel free to connect with me through the links provided in the footer.
          </p>
        </div>

        <div>
          <Tilt>
            <img src={Spaceboy} alt="GIF2" className='AboutGif' />
          </Tilt>
        </div>

      </div>

      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        <Skills skill='C' />
        <Skills skill='C++' />
        <Skills skill='Figma' />
        <Skills skill='html' />
        <Skills skill='CSS' />
        <Skills skill='React' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='Vercel' />
        <Skills skill='Bootstrap' />

      </div>
    </>
  )
}

export default About
