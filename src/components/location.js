
const Location = ({ city, country }) => {
    return (
        <div className="location">
            {/* {console.log("----->" + JSON.stringify(country))} */}
            {city && country ? (
                <div >
                    <h5>{city}</h5>
                    <h6>{country}</h6>
                </div>
            ) :
                <div>
                    <h5>city</h5>
                    <h6>country</h6>
                </div>
            }

        </div>
    );
}


export default Location;