import React from 'react';
import { CgCPlusPlus } from "react-icons/cg";
import { ImHtmlFive } from "react-icons/im";
import { FaC } from "react-icons/fa6";
import { SiCss3 } from "react-icons/si";
import { FaReact, FaGitAlt, FaGithub, FaFigma, FaBootstrap } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiVercel } from "react-icons/si";

const Skills = ({ skill }) => {
  const icon = {
    'C++': <CgCPlusPlus />,
    'C': <FaC />,
    'html': <ImHtmlFive />,
    'CSS': <SiCss3 />,
    'React': <FaReact />,
    'Javascript': <DiJavascript1 />,
    'Git': <FaGitAlt />,
    'Github': <FaGithub />,
    'Figma': <FaFigma />,
    'Bootstrap': <FaBootstrap />,
    'Vercel': < SiVercel />
  }

  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills;
