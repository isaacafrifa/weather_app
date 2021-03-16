import { CloudSun } from 'react-bootstrap-icons';
import { useSpring, animated } from 'react-spring'

const Weather = ({ weatherDescription, weatherIcon }) => {

    const props = useSpring({ 
      to:{opacity: 1, marginLeft: 0  },
      from: { opacity: 0, marginLeft: -500  } })

//icon url sample-> http://openweathermap.org/img/wn/10d@2x.png 
const ICON_URL= 'http://openweathermap.org/img/wn/';

    return (
        <div className="weather">
            {weatherDescription && weatherIcon ? (
                < >
                    <animated.div style={props}>
                    <h6>{weatherDescription}</h6>
                    <img src={`${ICON_URL}${weatherIcon}@2x.png`} className="img-fluid weather-icon" alt={weatherDescription}/>
                    </animated.div>
                </>
            ) :
                <>
                    <h6>Weather Value</h6>
                    <CloudSun size={96} />
                </>
            }
        </div>
    );
}

export default Weather;