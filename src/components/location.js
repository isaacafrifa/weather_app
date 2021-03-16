
const Location = ({ city, country, timezone }) => {

    const getLocalDate=(timezoneInSeconds)=>{
        let timezoneInHours = Math.floor(timezoneInSeconds / 60 / 60)
        let date = new Date();
        let utcDate = new Date(date.toUTCString());
        utcDate.setHours(utcDate.getHours()+timezoneInHours);
        let usDate = new Date(utcDate);
        return usDate.toDateString()
        }
   

    return (
        <div className="location">
            {/* {console.log("----->" + JSON.stringify(country))} */}
            {city && country && timezone!==null ? (
                <div >
                    <h5><b>{city}</b> <sup>{country}</sup></h5>
                    <h6><span  style={{fontSize: "0.8em"}}>Local Date: </span>{getLocalDate(timezone)} </h6> 
                  
                </div>
            ) :
                <div>
                    <h5>city</h5>
                    <h6>country</h6>
                    <h6>local date</h6>
                </div>
            }

        </div>
    );
}


export default Location;