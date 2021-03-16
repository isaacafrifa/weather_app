import { CloudSun } from 'react-bootstrap-icons';
const Weather = ({ weatherDescription, weatherIcon }) => {
// http://openweathermap.org/img/wn/10d@2x.png 
const ICON_URL= 'http://openweathermap.org/img/wn/';

    return (
        <div className="weather">
            {weatherDescription && weatherIcon ? (
                <div >
                    <h6>{weatherDescription}</h6>
                    <img src={`${ICON_URL}${weatherIcon}@2x.png`} className="img-fluid" alt={weatherDescription} style={{marginTop:"-1em"}}/>
                </div>
            ) :
                <div>
                    <h6>Weather Value</h6>
                    <CloudSun size={96} />
                </div>
            }
        </div>
    );
}




export default Weather;