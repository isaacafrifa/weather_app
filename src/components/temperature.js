
const Temperature = ({ tempValue, minTemp, maxTemp }) => {
    return (
        <div className="temperature">

            {tempValue && minTemp && maxTemp ? (
                <div >
                    <h3>{Math.round(tempValue)}<span style={{ fontSize: "0.9em" }}> &deg;C</span></h3>
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