import { Row, Col } from 'react-bootstrap';
import Tilt from 'react-parallax-tilt';
import DayImage from '../assets/images/day.jpeg'
import NightImage from '../assets/images/night.jpeg'
import Location from "./location";
import Temperature from "./temperature";
import Weather from "./weather";
import ExtraDetails from './extra';
import { useSpring, animated } from 'react-spring'


const Card = ({ weather }) => {

    const props = useSpring({ 
        opacity: 1, 
        from: { opacity: 0 } })

    return (
        <animated.div style={props}>
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
                                {/* check for night or day */}
                                {weather.weatherIcon.endsWith('n') ? (
                                <img src={NightImage} className="img-fluid" alt="pic" />
                                ) :
                                <img src={DayImage} className="img-fluid" alt="pic" />
                                }
                            </div>
                            <Row>
                                <Col xs={5} md={6} >
                                    <Location
                                        city={weather.city}
                                        country={weather.country}
                                        timezone={weather.timezone}
                                    />
                                </Col>
                                <Col xs={7} md={6}>
                                    <Temperature
                                        tempValue={weather.temperature}
                                        minTemp={weather.minTemperature}
                                        maxTemp={weather.maxTemperature} />
                                </Col>
                            </Row>
                            <div className="card-info">
                                <Weather
                                    weatherDescription={weather.weatherDescription}
                                    weatherIcon={weather.weatherIcon} />
                            </div>
                            <div className="footer">
                                <ExtraDetails
                                    //not breaking obj down
                                    weather={weather}
                                />
                            </div>
                        </div>
                    </div>
                </Tilt>
                {/* visible on small and medium screens */}
                {/* <p className="d-block d-sm-none d-none d-md-block d-lg-none" style={{color:"black"}}>For a surprise, click on the card!</p> */}
            </div>

        </animated.div>
    );
}

export default Card;