import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import ebharat from "../../Assets/Projects/ebharat.png";
import youtubeclone from "../../Assets/Projects/youtubeclone.png"
import recipefinder from "../../Assets/Projects/recipefinder.png"
import calculator from "../../Assets/Projects/calculator.png"
import todolist from "../../Assets/Projects/todolist.png"
import bookapp from "../../Assets/Projects/bookapp.png"
import lms from "../../Assets/Projects/lms.png";
import ecommerce from "../../Assets/Projects/e_commerce_backend.png"
import countdowntimer from "../../Assets/Projects/countdowntimer.png"


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ebharat}
              isBlog={false}
              title="E-Commerce Bharat App"
              description="E-Bharat App or e-commerce website using this  appliction user can order our favourite  products and this application is  build with react.js, Material-UI, and Firebase. Have features which allows user for realtime database."
              ghLink="https://github.com/Pushpendrachaudhary88/E-Bharat-e-commerce--react--js.git"
              demoLink="https://e-bharat-e-commerce-react-js.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={youtubeclone}
              isBlog={false}
              title="Youtube Clone"
              description="Youtube Clone  build with React.js , RapidAPI and Tailwind Css  with the helps these teck  make  the youtube clone . user can search of our favourite video , youtubers and lots of contents."
              ghLink="https://github.com/Pushpendrachaudhary88/youtube-reactjs-project.git"
              demoLink="https://youtube-reactjs-project.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={recipefinder}
              isBlog={false}
              title="Recipe Finder App"
              description="Recipe Finder project  build with HTML CSS and Javascript. Develop a web application that allows users to search for recipes based on ingredients. recipe APIs to fetch data based on user input "
              ghLink="https://github.com/Pushpendrachaudhary88/Infotrixs-final-Porject.git"
              demoLink="https://infotrixs-final-porject.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calculator}
              isBlog={false}
              title="Calculator App"
              description="Calculator appliction build with  React Components, Props, States, and the lifecycle of a React component." 
              ghLink="https://github.com/Pushpendrachaudhary88/React-Calculator.git"
              demoLink="https://react-calculator-gamma-sepia.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todolist}
              isBlog={false}
              title="To-Do-List"
              description="To-Do Appliction build with HTML CSS and javascript. Using this app user can understabnd the concept of CERD operation ."
              ghLink="https://github.com/Pushpendrachaudhary88/To-Do-List_Project-2t.git"
               demoLink="https://to-do-list-project-2t.vercel.app/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookapp}
              isBlog={false}
              title="Bookapp Landing Page"
              description=" Bookapp Landing Page build with HTML, CSS and javascripts features :-
              Hero Section
              Navigation Bar
              Features Section
              Testimonials Section
              Contact Form
              Responsive Design
              "
              ghLink="https://github.com/Pushpendrachaudhary88/InternStudio-Final.git"
               demoLink="https://pushpendrachaudhary88.github.io/InternStudio-Final/"    
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lms}
              isBlog={false}
              title="LMS-Backend Project"
              description=" Library Management System application build REST APIs for a Library Management System Project using Spring Boot, Spring Data JPA (Hibernate), and MySQL database. LMS features
              Create a new User
              Fetch all the Users
              Add new book
              Fetch all the books
              Fetch specific book
              Delete a book 
              Borrow a book 
              Return a book"
             
              ghLink="https://github.com/Pushpendrachaudhary88/Library-Management-System-Backend-Project..git"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="E-Commerce Backend Project"
              description=" E-commerce Amazon application build with spring boot , spring MVC , spring, JPA Hibernate and MySQL for database . features:- 
              Database Integration
              Authentication and Authorization:
              Product Management
              Shopping Cart
              Order Processing
              Payment Integration
              User Profiles
              Security
              "
              ghLink="https://github.com/Pushpendrachaudhary88/E-Commerce-April.git"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={countdowntimer}
              isBlog={false}
              title="Countdown Timer"
              description="Countdown Tmier Project build with HTML CSS and javascript. features 
              Start, Pause, and Reset Controls
              Visual Countdown Representation
              Theme Customization
              Responsive Design
              "
              ghLink="https://github.com/Pushpendrachaudhary88/Countdown-Timer-Project.git"
              demoLink="https://countdown-timer-project-one.vercel.app/"    
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
