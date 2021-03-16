const Location = ({ city, country }) => {

    return (
        <div className="location">
            {/* {console.log("----->" + JSON.stringify(country))} */}
            {city && country ? (
                <>
                    <h4><b>{city}</b> <sup>{country}</sup></h4>   
                </>
            ) :
                <>
                    <h4>city <sup>country</sup> </h4>
                </>
            }
        </div>
    );
}

export default Location;