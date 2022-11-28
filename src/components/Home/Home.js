import { isDisabled } from "@testing-library/user-event/dist/utils";
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  const openInNewTab = url => {
    console.log("test");
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={5} className="home-d-flex">

              <h1 style={{ paddingBottom: 15 }} className="heading">
                Please help{" "}
             
              </h1>

              {/* <h1 className="heading-name">
                
              <strong className="main-name"> Woman Life Liberty</strong>
              </h1> */}

              <div style={{ padding: 50, paddingTop:10, textAlign: "left" }}>
                <Type />
              </div>

              <div style = {{paddingTop: 20}}>
                {/* a button div that says iranian scholars for liberty petition */}

                <div className="heading-name">By signing pettions:</div>
            
                
                
                </div>
                <div  style={{paddingTop:30}} className="heading-name" >And sharing our voice!</div>

            </Col>


            <Col md={3} style={{ paddingBottom: 20, paddingLeft:50 }} className="home-d-flex" onClick={ (e) => openInNewTab("test.com") } >
             
          
                {/* opens a web page on lick */}
             <div style={{paddingTop: 60, fontSize: 40}} aria-hidden="true" onClick={ () =>  openInNewTab("test.com")}
               >
              Sign Iranian Scholars for Liberty Statement
            </div>

            
       
       
            </Col>
            <Col md={3} style={{ paddingBottom: 20, paddingLeft:50 }}  className="home-d-flex" >
            <div style={{paddingTop: 60, fontSize: 40}}>
             Free Iranian protest rapper Toomaj Salehi
            </div>
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
      <Home2 />
    </section>
  );
}

export default Home;
