
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

export default function HomePage() {
    const openInNewTab = url => {
        console.log("test");
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div>

            <Particle />

            <Container fluid className="home-section" id="home"  >

                <Container className="home-content">

                    <Row style={{ justifyContent: "space-evenly" }}>
                        <Col md={4} style={{ padding: 20 }} >

                            <h1 style={{ paddingBottom: 15 }} className="heading">
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


                        <Col md={3} style={{ padding: 20 }} >


                            {/* opens a web page on lick */}
                            <div className="petition"   >
                                Sign Iranian Scholars for Liberty Statement
                            </div>

                            <Button className="home-about-social" style={{ padding: 10 }} href="https://www.iranianscholarsforliberty.com/how-we-can-help/statement" target="_blank" rel="noreferrer">Please click me!</Button>




                        </Col>
                        <Col md={3} style={{ padding: 20 }} className="home-d-flex" >
                            <div className="petition">
                                Free Iranian protest rapper Toomaj Salehi
                            </div>

                            <Button className="home-about-social" style={{ padding: 10 }} href="https://www.change.org/p/free-iranian-protest-rapper-toomaj-salehi" target="_blank" rel="noreferrer">Please click me too!</Button>
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
                                        quote={"Please help Iranians in their fight by filling a petition. Woman Life Freedom shall prevail."}
                                        title={"Please share and raise awareness. Iranians are dying for their freedom over two months and the media ignores the dire situation. Help them by filling a petition."}
                                        hashtag="iranianscholarsforliberty"

                                    >

                                        <FacebookIcon round="true" />
                                    </FacebookShareButton>


                                </li>
                                <li className="social-icons">

                                    <TwitterShareButton
                                        url={"https://petition-for-iran.vercel.app/"}
                                        quote={"Please help Iranians in their fight by filling a petition. Woman Life Freedom shall prevail."}
                                        title={"Please share and help Iranian's in their fight for freedom and equality. You can help them win by filling a petition:"}
                                        hashtag="#iran #iranianscholarsforliberty #mahsa_amini"
                                    >
                                        <TwitterIcon round="true" />
                                    </TwitterShareButton>
                                </li>
                                <li className="social-icons">
                                    <LinkedinShareButton
                                        url={"https://petition-for-iran.vercel.app/"}
                                        quote={"Please help Iranians in their fight for liberty by filling a petition. Woman Life Freedom shall prevail."}
                                        title={"Please share and help Iranian's in their fight for freedom and equality. You can help them win by filling a petition:"}
                                        hashtag="#iran #iranianscholarsforliberty #mahsa_amini"
                                    >
                                        <LinkedinIcon round="true" />
                                    </LinkedinShareButton>

                                </li>
                                <li className="social-icons">

                                    <RedditShareButton

                                        url={"https://petition-for-iran.vercel.app/"}
                                        quote={"Please help Iranians in their fight by filling a petition. Woman Life Freedom shall prevail. "}
                                        title={"Please share and help Iranian's in their fight for freedom and equality. You can help them win by filling a petition:"}
                                        hashtag="#iran #iranianscholarsforliberty #mahsa_amini"
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