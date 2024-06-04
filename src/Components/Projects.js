import React from 'react';
import ProjectBox from './ProjectBox';
import LandingPage from '../images/Landingpage.png';
import TexttoVoice from '../images/TexttoVoice.png';
import Weatherapp from '../images/weatherapp.png';
import Tiktaktoe from '../images/xo.png';
import Stopwatch from '../images/stopwatch.png';
import MenuSpot from '../images/menuspot.png';
import iphone from '../images/iphone.png'
import todo from '../images/TodoList.png'

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={LandingPage} projectName="LandingPage" />
        <ProjectBox projectPhoto={TexttoVoice} projectName="TexttoVoice" />
        <ProjectBox projectPhoto={MenuSpot} projectName="MenuSpot" />
        <ProjectBox projectPhoto={Weatherapp} projectName="WeatherApp" />
        <ProjectBox projectPhoto={Stopwatch} projectName="StopWatch" />
        <ProjectBox projectPhoto={Tiktaktoe} projectName="TikTakToe" />
        <ProjectBox projectPhoto={iphone} projectName="iPhone_Site" />
        <ProjectBox projectPhoto={todo} projectName="TodoList" />
      </div>

    </div>
  )
}

export default Projects