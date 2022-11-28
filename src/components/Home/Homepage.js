
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

import Type from "./Type";
import { Container, Row, Col, Button } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";

export default function HomePage() {
    const openInNewTab = url => {
        console.log("test");
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div>

<Particle />

            <Container fluid className="home-section" id="home">

                <Container className="home-content">

                    <Row>
                        <Col md={5}>

                            <h1 style={{ paddingBottom: 15 }} className="heading">
                                Please help

                            </h1>

                            {/* <h1 className="heading-name">
                
              <strong className="main-name"> Woman Life Liberty</strong>
              </h1> */}

                            <div style={{ paddingTop: 20, paddingBottom: 20, textAlign: "left" }}>
                                <Type />
                            </div>

                            <div style={{ paddingTop: 20 }}>
                                {/* a button div that says iranian scholars for liberty petition */}

                                <div className="heading">By signing petitions

                                </div>



                            </div>
                            <div style={{ paddingTop: 5, paddingBottom: 20 }} className="heading" >And sharing our voices</div>

                            <ul style={{ paddingTop: 10 }}  >

                                <li className="social-icons">
                                    <a
                                        href="https://github.com/soumyajit4419"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="icon-colour  home-social-icons"
                                    >
                                        <AiFillGithub />
                                    </a>
                                </li>
                                <li className="social-icons">
                                    <a
                                        href="https://twitter.com/Soumyajit4419"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="icon-colour  home-social-icons"
                                    >
                                        <AiOutlineTwitter />
                                    </a>
                                </li>
                                <li className="social-icons">
                                    <a
                                        href="https://www.linkedin.com/in/soumyajit4419/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="icon-colour  home-social-icons"
                                    >
                                        <FaLinkedinIn />
                                    </a>
                                </li>
                                <li className="social-icons">
                                    <a
                                        href="https://www.instagram.com/soumyajit4419"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="icon-colour home-social-icons"
                                    >
                                        <AiFillInstagram />
                                    </a>
                                </li>
                            </ul>

                          

                        </Col>


                        <Col md={3} style={{ paddingBottom: 20, paddingLeft: 50 }}    >


                            {/* opens a web page on lick */}
                            <div  className="petition"   >
                                Sign Iranian Scholars for Liberty Statement
                            </div>

                            <Button className="home-about-social" style={{padding:10}} href="https://www.iranianscholarsforliberty.com/how-we-can-help/statement" target="_blank" rel="noreferrer">Please click me!</Button>

                


                        </Col>
                        <Col md={3} style={{ paddingBottom: 20, paddingLeft: 50 }} className="home-d-flex" >
                            <div  className="petition">
                            Free Iranian protest rapper Toomaj Salehi petition
                            </div>

                            <Button className="home-about-social" style={{padding:10}} href="https://www.change.org/p/free-iranian-protest-rapper-toomaj-salehi" target="_blank" rel="noreferrer">Please click me too!</Button>
                            {/* <div style={{ textAlign: "center" }}>
                test
              </div>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              /> */}
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    );
}