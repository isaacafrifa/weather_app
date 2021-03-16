
const Temperature = ({ tempValue, minTemp, maxTemp }) => {
  
    return (
        <div className="temperature">
                {/*NB: temperature can be 0 */}
            {tempValue!=null && minTemp!=null && maxTemp!=null ? (
                <div >
                    <h3>
                    <b>{Math.round(tempValue)}</b>
                    <sup>&deg;C</sup>
                    </h3>
                    <h6>{Math.round(minTemp)}/{Math.round(maxTemp)} &deg;C</h6>
                </div>
            ) :
                <div>
                    <h4>Temp Value</h4>
                    <h6>Min/Max</h6>
                </div>
            }
        </div>
    );
}


export default Temperature;