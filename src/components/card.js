
import { Container, Row, Col } from 'react-bootstrap';
import Tilt from 'react-parallax-tilt';
import Avatar from '../assets/images/avatar.jpg'
import Location from "../components/location";

const Card = () => {


    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <div>
                            <Tilt
                                className="tilt-img"
                                tiltMaxAngleX={35}
                                tiltMaxAngleY={35}
                                perspective={900}
                                scale={1.1}
                                transitionSpeed={2000}
                                gyroscope={true}>
                                <div className="card">
                                    <img src={Avatar} className="inner-element img-fluid" alt="pic" />
                                    <div className="card-content">
                                        <Location />
                                        <h4>Cold</h4>
                                        <p className="font-italic">
                                            "A true master is an eternal student"<br />
                                           - Master Yi
                                        </p>
                                    </div>
                                </div>
                            </Tilt>
                            {/* visible on small and medium screens */}
                            {/* <p className="d-block d-sm-none d-none d-md-block d-lg-none" style={{color:"black"}}>For a surprise, click on the card!</p> */}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Card;