

import { Row, Col } from 'react-bootstrap';
import Tilt from 'react-parallax-tilt';
import Avatar from '../assets/images/avatar.jpg'
import Location from "./location";
import Temperature from "./temperature";
import Weather from "./weather";
import ExtraDetails from './extra';



const Card = ({ location }) => {
    return (
        <div className="container">
            <Tilt
                className="tilt-img"
                tiltMaxAngleX={35}
                tiltMaxAngleY={35}
                perspective={900}
                scale={1.1}
                transitionSpeed={2000}
                gyroscope={true}>

                <div className="cards">
                    <div className="card-item">
                        <div className="card-image">
                            <img src={Avatar} className="inner-element img-fluid" alt="pic" />
                        </div>
                        <Row>
                            <Col xs={5} md={6} >
                                <Location
                                    city={location.city}
                                    country={location.country}
                                //props={location}
                                />
                            </Col>
                            <Col xs={7} md={6}>
                                <Temperature />
                            </Col>
                        </Row>
                        <div className="card-info">
                            <Weather />
                        </div>
                        <div className="footer">
                            <ExtraDetails />
                        </div>
                    </div>
                </div>
            </Tilt>
            {/* visible on small and medium screens */}
            {/* <p className="d-block d-sm-none d-none d-md-block d-lg-none" style={{color:"black"}}>For a surprise, click on the card!</p> */}
        </div>



    );
}

export default Card;