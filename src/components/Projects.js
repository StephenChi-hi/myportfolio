/** @format */

import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import chisom1 from "../assets/img/chisom1.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import project1 from "../assets/img/project1.png";
import project2 from "../assets/img/project2.png";
import project3 from "../assets/img/project3.png";
import project4 from "../assets/img/project4.png";
import project5 from "../assets/img/project5.png";
import project6 from "../assets/img/project6.png";
import project7 from "../assets/img/project7.png";
import project8 from "../assets/img/project8.png";
import project9 from "../assets/img/project9.png";
import project10 from "../assets/img/project10.png";
import project11 from "../assets/img/project11.png";
import project12 from "../assets/img/project12.png";
import project13 from "../assets/img/project13.png";
import project14 from "../assets/img/project14.png";

export const Projects = () => {
  const projects = [
    {
      title: "SaaS Business Startup",
      description:
        "Providing innovative design inspiration for startups and businesses to create cutting-edge websites.",
      imgUrl: project4,
      url: "https://webspirre.com/",
    },
    {
      title: "Afro-Centric Stock Images Platform",
      description:
        "A curated platform showcasing Afro-centric stock images tailored for businesses and creative projects.",
      imgUrl: project10,
      url: "https://www.stockafrika.com/",
    },
    {
      title: "Gadget E-commerce Website",
      description:
        "Empowering users to explore and purchase premium-quality gadgets conveniently online.",
      imgUrl: project5,
      url: "https://www.next-gadgets.store/",
    },
    {
      title: "Agro-Tech Business Startup",
      description:
        "Bridging the gap between landowners and farmers to promote sustainable agriculture and enhance food security.",
      imgUrl: project11,
      url: "https://cybalbuzz.com/agro-tech-startup",
    },
    {
      title: "WorkSpace and Tech Hub Website",
      description:
        "A detailed showcase of the workspace offerings, highlighting tech hub facilities and collaborative opportunities.",
      imgUrl: project6,
      url: "https://www.corebicle.com/",
    },
    {
      title: "Cosmetics E-commerce Website",
      description:
        "Offering users an extensive range of high-quality cosmetics available for purchase online.",
      imgUrl: project9,
      url: "https://grandio-segrin-e-shop1.vercel.app/",
    },
    {
      title: "Marketing Agency Website",
      description:
        "Showcasing comprehensive marketing services designed to elevate brands and drive business growth.",
      imgUrl: project7,
      url: "https://c2brands-website.vercel.app/",
    },
    {
      title: "Marketplace and E-commerce Website",
      description:
        "An online platform connecting buyers and sellers for seamless transactions and a wide variety of products.",
      imgUrl: project12,
      url: "https://www.beelydrop.com/",
    },
    {
      title: "Dispatch and E-commerce Website",
      description:
        "Providing reliable delivery services tailored for online stores and e-commerce businesses.",
      imgUrl: project13,
      url: "https://run-am.vercel.app/",
    },
    {
      title: "Cryptocurrency Startup Agency Website",
      description:
        "Highlighting cryptocurrency agency services, offering innovative solutions for blockchain and crypto ventures.",
      imgUrl: project14,
      url: "https://solpanda.vercel.app/",
    },
    {
      title: "Food Business Website",
      description:
        "Showcasing food business offerings, including products and services designed for food lovers.",
      imgUrl: project1,
      url: "https://cybalbuzz.com/food-business",
    },
    {
      title: "Studio Website",
      description:
        "Highlighting studio services and products while connecting with clients online for creative projects.",
      imgUrl: project8,
      url: "https://salford-studio.vercel.app/",
    },
    {
      title: "Cosmetics Business Website",
      description:
        "Displaying a wide variety of cosmetic products and services to cater to beauty enthusiasts.",
      imgUrl: project2,
      url: "https://cybalbuzz.com/cosmetics-business",
    },
    {
      title: "Restaurant Business Website",
      description:
        "Presenting the restaurant's menu, ambiance, and services to attract and engage food enthusiasts.",
      imgUrl: project3,
      url: "https://cybalbuzz.com/restaurant-business",
    },
  ];


  const projects1 = [
  
    {
      title: "Travel Business Website",
      description: "Development",
      imgUrl: projImg1,
    },

    {
      title: "Business Startup",
      description: "Development",
      imgUrl: projImg2,
    },

    {
      title: "Business Startup",
      description: "Development",
      imgUrl: projImg3,
    },
   
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <center>
                    <img className="picsd" alt="chisom" src={chisom1} />
                    <br />
                    <br />
                    <h3>Nwike Chisom </h3>
                    <p>Senior Software Developer and Project manager</p>
                  </center>

                  <br />
                  <br />

                  <h2>Projects</h2>
                  <p>
                    A successful website does more than just exist—it serves as
                    a powerful gateway, drawing the right audience and
                    connecting them seamlessly to the core services or products
                    of a business.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Websites</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Mobile</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Others</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>{" "}
                      </Tab.Pane>

                      <Tab.Pane eventKey="third">
                        <Row>
                          {projects1.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      <img className="background-image-right" src={colorSharp2} alt="/"></img>
    </section>
  );
};
