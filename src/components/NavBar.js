/** @format */

import { useState, useEffect } from "react"; //to handle which link we are on
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
  // eslint-disable-next-line
  const [activeLink, setActiveLink] = useState("home"); // set to home that is what we have in the beginning
  const [scrolled, setScrolled] = useState(false); //to detect we a user scroll or not

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // eslint-disable-next-line
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      {/* nav bar from React Boostrap */}
      <Navbar expand="md" className={scrolled ? "scrolled" : "scrolled"}>
        <Container>
          <Navbar.Brand href="/">
            <img className="logo" src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/nwike-c-6b90a9156">
                  <img src={navIcon1} alt="" />
                </a>
                <a href="https://www.instagram.com/nature_ncs">
                  <img src={navIcon3} alt="" />
                </a>
              </div>
              <HashLink to="#">
                <button
                  onClick={() => {
                    window.location.href = "https://t.me/naTure1715";
                  }}
                >
                  <span>Let’s Connect</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
