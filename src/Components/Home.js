import React from 'react';
import Typed from "./Typed.js";
import Astronaut from '../images/giphy.gif';
import Tilt from 'react-parallax-tilt';
import Profile from '../images/profile.jpg';


const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>GOWTHAM</b></h1>
          <Typed />
        </div>

        <Tilt>
          <img className='Profile' src={Profile} alt="" />
        </Tilt>

      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>Introduction</b></h1>
          <p>
            I am passionate about transforming innovative ideas into impactful websites . My expertise lies in <b>C </b>and<b> C++</b>. I have some experience with <b>ReactJS </b>,<b> Figma</b>. I am also planning to learn <b>MongoDB</b> and <b>JavaScript</b>.<br /><br />
            In addition to my development skills, I am proficient in <b>Designing</b>, allowing me to create solutions that are both<b> functional</b> and <b>visually</b> appealing. I am committed to continuous learning and always seek out new<b> challenges</b> and <b>opportunities</b> to grow professionally.<br /><br />
            I believe in the power of<b> collaboration</b>  and thrive in <b>team </b>environments where <b>creative</b> ideas can flourish. My <b>goal</b> is to contribute to projects that make a <b>positive </b>difference in people's lives.
          </p>
        </div>

        <Tilt>
          <img src={Astronaut} alt="HomeGif" className='HomeGif' />
        </Tilt>
      </div>
    </div>
  )
}

export default Home