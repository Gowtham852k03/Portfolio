import React from 'react';
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";


const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    StopWatchDesc: "Introducing the ultimate stopwatch web app with time lapse, start, stop, and reset functionalities. Perfect for all your timing needs, anytime, anywhere.",
    StopWatchGithub: "https://github.com/Gowtham852k03/Stop_Watch",
    StopWatchWebsite: "https://gowtham852k03.github.io/Stop_Watch/",

    WeatherAppDesc: "Get real-time weather updates and  forecasts for any location with our intuitive web app. Stay informed on temperature, humidity and wind speed to plan your day with confidence.",
    WeatherAppGithub: "https://github.com/Gowtham852k03/Weather_App",
    WeatherAppWebsite: "https://gowtham852k03.github.io/Weather_App/",

    TexttoVoiceDesc: "Web app with Google's Text-to-Speech using HTML/CSS/JS  for text-to-speech conversion.",
    TexttoVoiceGithub: "https://github.com/Gowtham852k03/Text-to-Voice",
    TexttoVoiceWebsite: "https://gowtham852k03.github.io/Text-to-Voice/",

    MenuSpotDesc: "Introducing our Figma prototype for a food menu spot – your go-to for browsing delicious dishes, daily specials, and restaurant details with ease.",
    MenuSpotGithub: "",
    MenuSpotWebsite: "https://www.figma.com/proto/vBXBdfrjDVs8wDsi0rtpZ2/Untitled?node-id=289-129&t=3R41mMYnID9DOtPv-1&scaling=scale-down&starting-point-node-id=289%3A129",


    LandingPageDesc: "Explore your next adventure with our innovative tourism landing page. Discover curated travel experiences, exclusive deals, and expert advice all in one place. Start your journey today and explore the world .",
    LandingPageGithub: "https://github.com/Gowtham852k03/Landing_Page",
    LandingPageWebsite: "https://gowtham852k03.github.io/Landing_Page/",

    TikTakToeDesc: "Explore our tic-tac-toe game, a classic reborn with a sleek, modern design and intuitive gameplay.",
    TikTakToeGithub: "https://github.com/Gowtham852k03/Tik_Tak_Toe",
    TikTakToeWebsite: "https://gowtham852k03.github.io/Tik_Tak_Toe/",

    TodoListDesc: "Discover our innovative todo list web app, designed with ReactJS for seamless task management. Effortlessly add, organize, and prioritize tasks to boost your productivity.",
    TodoListGithub: "https://github.com/Gowtham852k03/Todo_Lists",
    TodoListWebsite: "https://gowtham852k03.github.io/Todo_Lists/",

  }

  let show = '';
  if (desc[projectName + 'Github'] === "") {
    show = "none";
  }

  return (
    <div className='projectBox'>
      <img className='projectPhoto' src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + 'Desc']}
        <br />

        <a style={{ display: show }} href={desc[projectName + 'Github']} target='_blank'>
          <button className='projectbtn'><FaGithub /> Github</button>
        </a>

        <a href={desc[projectName + 'Website']} target='_blank'>
          <button className='projectbtn'><CgFileDocument /> Demo</button>
        </a>
      </div>
    </div>
  )
}

export default ProjectBox
