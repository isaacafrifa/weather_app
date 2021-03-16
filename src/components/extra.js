import { Container, Row, Col } from 'react-bootstrap';

const ExtraDetails = ({ weather }) => {

const convertTime= (dateLong, timezone) =>{
   let localDate= new Date((dateLong + timezone) * 1000)
   let hours = ("0"+localDate.getHours()).slice(-2) 
   let minutes = ("0"+localDate.getMinutes()).slice(-2) 
   let time = `${hours}:${minutes}`
   return time
}



    return (
        <div className="extra-details">
            <Container fluid>
                <Row>
                    {weather ? (
                        <>
                            <Col xs={4} md={4}>
                                <h6>Humidity: <b>{weather.humidity}%</b></h6>
                                <h6>Wind: <b>{weather.windSpeed}m/s</b></h6>
                            </Col>
                            <Col xs={4} md={4}>
                                <h6>Feels like: <b>{Math.round(weather.feelsLike)}&deg;C</b></h6>
                                <h6>Last Update: <b>{convertTime( weather.lastUpdate, weather.timezone )}</b></h6>
                            </Col>
                            <Col xs={4} md={4}>
                                <h6>Sunrise:<b> {convertTime( weather.sunrise, weather.timezone )}</b> </h6>
                                <h6>Sunset: <b>{convertTime( weather.sunset, weather.timezone )}</b></h6>
                            </Col>
                        </>

                    ) :
                        <>
                            <Col xs={4} md={4}>
                                <h6>Humidity: data</h6>
                                <h6>Wind: data</h6>
                            </Col>
                            <Col xs={4} md={4}>
                                <h6>Feels like: data</h6>
                                <h6>Last Update: data</h6>
                            </Col>
                            <Col xs={4} md={4}>
                                <h6>Sunrise: data </h6>
                                <h6>Sunset: data</h6>
                            </Col>
                        </>
                    }



                </Row>


            </Container>
        </div>
    );
}


export default ExtraDetails;