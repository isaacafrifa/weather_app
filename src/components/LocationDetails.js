import { Row, Col } from 'react-bootstrap';

const LocationDetails = ({ timezone }) => {

    const getLocalDate = (timezoneInSeconds) => {
        let timezoneInHours = Math.floor(timezoneInSeconds / 60 / 60)
        let date = new Date();
        let utcDate = new Date(date.toUTCString());
        utcDate.setHours(utcDate.getHours() + timezoneInHours);
        let localDate = new Date(utcDate);
        return localDate.toDateString()
    }

    const getLocalTime = (timezoneInSeconds) => {
        let timezoneInHours = Math.floor(timezoneInSeconds / 60 / 60)
        let date = new Date();
        let utcDate = new Date(date.toUTCString());
        utcDate.setHours(utcDate.getHours() + timezoneInHours);
        let localDate = new Date(utcDate);
        let hours = ("0" + localDate.getHours()).slice(-2)
        let minutes = ("0" + localDate.getMinutes()).slice(-2)
        let localTime = `${hours}:${minutes}`
        return localTime;
        //localDate.toLocaleTimeString()
    }

    return (
        <div className="location-details">
            { timezone !== null ? (
                <Row>
                    <Col>
                        <div className="location-date">
                            <h6><span style={{ fontSize: "0.8em" }}>Local Date: </span><b>{getLocalDate(timezone)}</b> </h6>
                        </div>
                    </Col>
                    <Col>
                        <div className="location-time">
                            <h6><span style={{ fontSize: "0.8em" }}>Local Time: </span><b>{getLocalTime(timezone)} </b></h6>
                        </div>
                    </Col>
                </Row>
            ) :
                <Row>
                    <h6>local date</h6>
                    <h6>local time</h6>
                </Row>
            }
        </div>
    );
}

export default LocationDetails;