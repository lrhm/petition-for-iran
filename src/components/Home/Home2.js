import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/be_our_voice.jpg";
import voice from "../../Assets/14.jpeg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em", textAlign: "left" }}>
            <span className="purple"> Iran's 2022 Revolution </span> 
            </h1>
            <p className="home-about-body">
              The world's first <span className="purple"> Feminist Revolution</span> in history.
              <br />  
              <br />
              We are fighting for <b className="purple"> gender equality, freedom of speech, and freedom of religion.</b>
              <br />
              <br />


              We are fighting against a regime that is <b className="purple"> killing, torturing, and imprisoning </b> its own people and has killed over 10,000 people in the last 40 years.
              <br />
              <br />
              

              We are fighting against pedophilia, child abuse, and child marriage. The age of consent in islamic republic's law is <b className="purple">13</b> for girls.
              <br />
              <br />



              We are asking for your help to <b className="purple"> spread the word </b> and <b className="purple"> sign our petition </b> to help the Iranian people.
              <br />
              <br />
             
      
              <br />
              <br />

              We stand with <b className="purple">Iranians </b> and <b className ="purple">Ukranians</b> for our quest to <b className="purple">Liberty</b>.
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
              <img src={myImg} className="img-fluid"  />
              <img src={voice} className="img-fuild" width={300} style={{paddingTop:40}} />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1></h1>
            <p>
            <a href="iranianscholarsforliberty.com" className="purple">Iranian Scholars for Liberty</a> is a group of Iranian scholars who are fighting for the freedom of Iran.

            </p>
            {/* <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  // className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  // className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  // className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  // className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul> */}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
