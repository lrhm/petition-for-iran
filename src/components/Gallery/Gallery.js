import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'
import { Container, Row, Col, Button } from "react-bootstrap";

import './Gallery.css'
import GetImages from './Data.js'

export default function Gallery() {

    const images = GetImages()

    return (
        <div>

            <Container>

                <Row md={3}>
                        {
                            images.map((item, index) => {
                                return (
                                    <img src={item} style={{ maxWidth: 500, maxHeight: 500 }} />

                                )
                            })

                        }


                </Row>
                {/* 
                // <div>
                //     <img src="assets/1.jpg" />
                //     <p className="legend">Legend 1</p>
                // </div>
                // <div>
                //     <img src="assets/2.jpeg" />
                //     <p className="legend">Legend 2</p>
                // </div>
                // <div>
                //     <img src="assets/3.jpeg" />
                //     <p className="legend">Legend 3</p>
                // </div> */}
            </Container>




        </div>
    )
}