import React from "react";
// import resumePDF from "../../assets/resumePDF.pdf";
import DevResume from "../../assets/DevResume.pdf";
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
import { Container, Row, Col } from "react-bootstrap";

function Resume() {
  return (
    <Container className="container my-5">
      <h1>Proficiencies</h1>
      <br></br>
      <br></br>
      <Row>
        <br></br>
        <Col>
          <h5>
            • GitHub <FaGithub />
          </h5>
          <h5>
            • Git <FaGitAlt />
          </h5>
          <h5>
            • Heroku <SiHeroku />
          </h5>
          <h5>
            • Webpack <SiWebpack />
          </h5>
          <br></br>
          <a href={DevResume} target="_blank" rel="noreferrer">
            <h5>View my resume here!</h5>
          </a>
        </Col>

        <Col>
          <h3 id="resume">Front-end:</h3>
          <br></br>
          <h5>
            • HTML
            <FaHtml5 />
          </h5>
          <h5>
            • CSS
            <FaCss3Alt />
          </h5>
          <h5>
            • JavaScript
            <FaJsSquare />
          </h5>
          <h5>
            • jQuery
            <DiJqueryLogo />
          </h5>
          <h5>• Responsive design</h5>
          <h5>
            • React
            <FaReact /> <SiReactrouter /> <SiRedux />
          </h5>
          <h5>
            • Bootstrap
            <FaBootstrap />
          </h5>
        </Col>

        <Col>
          <h3 id="resume">Back-end:</h3>
          <br></br>
          <h5>• APIs</h5>
          <h5>
            • Node
            <FaNode /> <FaNpm />
          </h5>
          <h5>• Express</h5>
          <h5>
            • MySQL, Sequelize <SiMysql />
          </h5>
          <h5>
            • MongoDB, Mongoose
            <DiMongodb />
          </h5>
          <h5>• REST</h5>
          <h5>
            • GraphQL
            <SiGraphql />
          </h5>
        </Col>
      </Row>

      <script
        src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossorigin="anonymous"
      ></script>
    </Container>
  );
}

export default Resume;
