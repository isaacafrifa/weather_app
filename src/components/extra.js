import { Container, Row, Col } from 'react-bootstrap';

const ExtraDetails = (props) => {
    return (
        <div className="extra-details">
            <Container fluid>
                <Row>
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
                </Row>


            </Container>
        </div>
    );
}


export default ExtraDetails;