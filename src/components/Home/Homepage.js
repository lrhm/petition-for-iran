
import {
    EmailShareButton,
    FacebookIcon,
    FacebookShareButton,
    HatenaShareButton,
    InstapaperIcon,
    InstapaperShareButton,
    LineShareButton,
    LinkedinIcon,
    LinkedinShareButton,
    LivejournalShareButton,
    MailruShareButton,
    OKShareButton,
    PinterestShareButton,
    PocketShareButton,
    RedditIcon,
    RedditShareButton,
    TelegramShareButton,
    TumblrShareButton,
    TwitterIcon,
    TwitterShareButton,
    ViberShareButton,
    VKShareButton,
    WhatsappShareButton,
    WorkplaceShareButton
} from "react-share";

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
import Petition from "./Petition";


import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


export default function HomePage() {

    const petitions = [{
        title: "G7 Leaders: Expel Islamic Republic's Diplomats",
        url: "https://www.change.org/p/g7-leaders-expel-iran-s-diplomats-demand-that-political-prisoners-be-freed",
        buttonText: "Please make a difference",
    }, {
        title: "Sign Iranian Scholars for Liberty Statement",
        url: "https://www.iranianscholarsforliberty.com/how-we-can-help/statement",
        buttonText: "Academics, please sign this statement",
    },

    {
        title: "Stop The Executions of Protestors in Iran",
        url: "https://www.change.org/p/very-urgent-stop-execution-of-protestors-in-iran",
        buttonText: "Please help saving lives",
    },
    {
        title: "Help children in Iran",
        url: "https://www.change.org/p/iranian-regime-violent-targeting-of-children-and-adolescents",
        buttonText: "Please help children are being killed by bullets",
    },
    {
        title: " Free Iranian protest rapper Toomaj Salehi",
        url: "https://www.change.org/p/free-iranian-protest-rapper-toomaj-salehi",
        buttonText: "Please help, he faces death penalty",
    }

    ]

    const openInNewTab = url => {
        console.log("test");
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div>


            <Container fluid className="home-section" id="home"  >
            <Particle />

                <Container className="home-content">

                    <Row style={{ justifyContent: "space-evenly" }}>
                        <Col md={4} style={{ padding: 20 }} >

                            <h1 style={{ paddingBottom: 15 , paddingTop:5 }} className="heading">
                                Please help

                            </h1>

                            {/* <h1 className="heading-name">
                
              <strong className="main-name"> Woman Life Liberty</strong>
              </h1> */}

                            <div style={{ paddingTop: 10, paddingBottom: 10, textAlign: "left" }}>
                                <Type />
                            </div>

                            <div style={{ paddingTop: 20 }} className="sheading">

                                With <b className="purple"> only a few </b> clicks

                            </div>

                        </Col>


                        {/* <Col md={3} style={{ padding: 20 }} >

                            <Petition {...petitions[0]} />



                        </Col>
                        <Col md={3} style={{ padding: 20 }} className="home-d-flex" >
                            <Petition {...petitions[1]} />
                        </Col> */}

                        {
                            petitions.map((petition, index) => {
                                return (
                                    <Col md={4} style={{ padding: 20 }} className="home-d-flex" >
                                        <Petition {...petition} />
                                    </Col>
                                )
                            }

                            )}

                    </Row>

                    <Row>

                   
                    </Row>

                    <Row>
                        <div style={{
                            textAlign: "center",
                            alignItems: "center",
                            justifyContent: "center",
                            paddingTop: 50,
                            paddingBottom: 0,
                        }}>
                            <div style={{ paddingTop: 5, paddingBottom: 20 }} className="heading" >Please share our voices and stand with us</div>

                            <ul style={{ paddingTop: 10 }}  >

                                <li className="social-icons">
                                    <FacebookShareButton
                                        url={"https://petition-for-iran.vercel.app/"}
                                        quote={"Please help Iranians in their fight by filling out a petition. Woman Life Freedom shall prevail"}
                                        title={"Please share and help Iranians in their fight for freedom and equality. You can help them win by filling out a petition:"}
                                        hashtag="iranianscholarsforliberty"

                                    >

                                        <FacebookIcon round="true" />
                                    </FacebookShareButton>


                                </li>
                                <li className="social-icons">

                                    <TwitterShareButton
                                        url={"https://petition-for-iran.vercel.app/"}
                                        quote={"Please help Iranians in their fight by filling out a petition. Woman Life Freedom shall prevail"}
                                        title={"Please share and help Iranians in their fight for freedom and equality. You can help them win by filling out a petition:"}
                                        hashtag="#mahsa_amini"
                                    >
                                        <TwitterIcon round="true" />
                                    </TwitterShareButton>
                                </li>
                                <li className="social-icons">
                                    <LinkedinShareButton
                                        url={"https://petition-for-iran.vercel.app/"}
                                        quote={"Please help Iranians in their fight by filling out a petition. Woman Life Freedom shall prevail"}
                                        title={"Please share and help Iranians in their fight for freedom and equality. You can help them win by filling out a petition:"}
                                        hashtag="#mahsa_amini"
                                    >
                                        <LinkedinIcon round="true" />
                                    </LinkedinShareButton>

                                </li>
                                <li className="social-icons">

                                    <RedditShareButton

                                        url={"https://petition-for-iran.vercel.app/"}
                                        quote={"Please help Iranians in their fight by filling out a petition. Woman Life Freedom shall prevail"}
                                        title={"Please share and help Iranians in their fight for freedom and equality. You can help them win by filling out a petition:"}
                                        hashtag="#mahsa_amini"
                                    >
                                        <RedditIcon round="true" />
                                    </RedditShareButton>
                                </li>


                            </ul>
                        </div>
                    </Row>


                </Container>
            </Container>
        </div>
    );
}