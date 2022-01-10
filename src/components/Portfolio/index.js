// child component of Gallery component handles photo rendering logic
import React from "react";
import Projects from "../../components/Project";
import chickenrun from "../../assets/img/chickenrun.png";
import weather from "../../assets/img/weather.png";
import covid from "../../assets/img/covid.png";
import philhub from "../../assets/img/philhub.png";
import schedule from "../../assets/img/schedule.png";


const Portfolio = (singleProject) => {

  const projectList = [
    {
      title: "COVID Co-Pilot",
      summary: "This application is designed to provide COVID-19 information to users in an easy-to-access manner. Whereas most informational apps about COVID-19 display an overwhelming amount of information organized in a less-than-ideal fashion, our site is designed with the user in mind, so statistics about national and continental data is easily identifiable, and with a click of the mouse, users can access COVID-19 data specifically about their selected state.",
      image: covid,
      technologies: "APIs, Javascript",
      deployedLink: "https://maxaeon.github.io/covid/",
      github: "https://github.com/maxaeon/covid/",
    },        
    {
      title: "Chicken Run",
      summary: "The project allows users to register for an account, access information about various plants and animals, add information to this database, as well as organize their farming activities in a calendar.",
      image: chickenrun,
      technologies: "Handlebars, JavaScript",
      deployedLink: "https://chicken-running.herokuapp.com/",
      github: "https://github.com/maxaeon/project-2/",
    },
    {
      title: "Philosophers' Hub",
      summary: "An online resource for philosophers from all walks of life.",
      image: philhub,
      technologies: "JavaScript, CSS",
      deployedLink: "https://phil-hub.com",
      github: "https://github.com/maxaeon/philosophershub/",
    },
    {
      title: "Weather Forecast",
      summary: "This application allows travelers to plan their trips according to the weather forecast by providing the weather outlook for multiple cities. Retrieves weather data from the OpenWeather One Call API.",
      image: weather,
      technologies: "JavaScript, OpenWeatherMap API, localStorage",
      deployedLink: "https://maxaeon.github.io/weather",
      github: "https://github.com/maxaeon/weather",
    },
    {
      title: "Scheduler",
      summary: "A daily planner that can help with users' time management. Stores events by the hour and displays specific time blocks for standard business hours color-coded to indicate whether a time block is in the past, present or future.",
      image: schedule,
      technologies: "JavaScript, localStorage, jQuery, Moment.js",
      deployedLink: "https://maxaeon.github.io/schedule/",
      github: "https://github.com/njthanhtrang/5.-Third-Party-APIs-Challenge-Work-Day-Scheduler",
    },
];

  return (
    <div key={singleProject.title}>
      <div className="flex-row">
          {projectList.map((singleProject) => (
            <Projects singleProject={singleProject}/>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
