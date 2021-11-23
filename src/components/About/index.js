import React from "react";
import PortfolioImage from "../../assets/PortfolioImage.JPG";
import {
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaBootstrap,
  FaNode,
  FaReact,
  FaNpm,
} from "react-icons/fa";
import { DiJqueryLogo, DiMongodb } from "react-icons/di";
import {
  SiMysql,
  SiHeroku,
  SiWebpack,
  SiRedux,
  SiReactrouter,
  SiGraphql,
} from "react-icons/si";

function About() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img
            src={PortfolioImage}
            className="my-2"
            style={{ width: "60%" }}
            alt="cover"
          ></img>
        </div>
        <div className="col-6">
          <h1 id="about">About me</h1>
          <h6 style={{ width: "80%", justifyContent: "center" }} id="about">
          Hi! I'm M. A. Parks (preferred name 'Max', legal name 'Megan'), currently a PhD Candidate in the Philosophy Department at the University of California, Davis, while simultaneously working through a coding/web development program through Michigan State University. <br></br>
          My previous education includes a B.A. in psychology and philosophy from the University of Michigan, Flint (2014), and an M.A. in philosophy from Wayne State University (2016). <br></br>
          I am a front-end web developer leveraging an extensive philosophy and psychology background to build a more intuitive user experience on the web. I’m currently working toward a certificate in full stack development from Michigan State University with newly developed skills in a variety of technologies and languages. I’m known as an innovative problem solver passionate about web development, with a focus on accessibility.
          <br></br>
          <br> </br> With each project, my aim is to best engage my audience for an impactful user experience. For example, I recently worked on a team of four to develop a single-page COVID-19 informational app that helps individuals in the COVID-19 pandemic access reliable information about national, continental, and state data. I also worked as part of a team to create a full-stack web application which allows users to track various farm activities and plant, animal, and weather information. I’m looking forward to using my skills as part of a fast-paced, quality-driven team to build better experiences on the web. I’m looking to collaborate on website development and other projects to improve my skillset.  

          </h6>
          <br></br>
          <br></br>
          <br></br>
          <h4>Technical Skills:</h4>
          <h2>
            <FaHtml5 />
            <FaCss3Alt />
            <FaJsSquare />
            <DiJqueryLogo />
            <FaReact />
            <SiRedux />
            <FaBootstrap />
            <FaNode />
            <SiMysql />
            <DiMongodb />
            <SiGraphql />
          </h2>
        </div>
      </div>
    </div>
  );
}

export default About;
