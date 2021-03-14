
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { useState, useEffect } from "react";
import { API_KEY } from "../constants/constants";
import axios from "axios";
import { useForm } from 'react-hook-form';
import Card from '../components/card';



const MainContent = () => {

    const [hasError, setHasError] = useState(false)
    const [hasNotFoundError, setHasNotFoundError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccessful, setIsSuccessful] = useState(false)
    const [location, setLocation] = useState({})
    //   const [city, setCity] = useState(null)
    //   const [country, setCountry] = useState(null)

    //Using React Hook Form 
    const { register, handleSubmit, getValues, errors } = useForm(); // initialize the hook here


    //get Weather Details
    useEffect(() => {
        // resetStateMessages();
        // // api.openweathermap.org/data/2.5/weather?q=London,uk&appid={API key}
        // axios.get('http://api.openweathermap.org/data/2.5/weather', {
        //     params: {
        //         q: 'London,uk',
        //         units: 'metric', //For temperature in Celsius use units=metric
        //         appid: API_KEY
        //     }
        // })
        //     .then(function (response) {
        //         console.log(response);
        //         // console.log(response.data);
        //         let jsonObject ={
        //             city: response.data.name,
        //             country: response.data.sys.country
        //         }
        //        setLocation(jsonObject);
        //     //   console.log(jsonObject);
        //     // setCity(jsonObject.city);
        //     // setCountry(jsonObject.country);

        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //         if (error.response.status === 404) {
        //             setHasNotFoundError(true)
        //         }
        //         else {
        //             setHasError(true)
        //         }
        //     });
    }, []);

    const resetStateMessages = () => {
        setHasError(false)
        setHasNotFoundError(false)
        setIsSuccessful(false)
        setLocation(null)
    
    }

    const onSubmit = (data, e) => {
        e.target.reset(); // reset after form submit
        resetStateMessages()
        setIsLoading(true)
  
        // api.openweathermap.org/data/2.5/weather?q=London,uk&appid={API key}
  axios.get('http://api.openweathermap.org/data/2.5/weather', {
        params: {
            q: data.cityName,
            units: 'metric', //For temperature in Celsius use units=metric
            appid: API_KEY
        }
    })
        .then(function (response) {
            console.log(response);
            // console.log(response.data);
            let jsonObject ={
                city: response.data.name,
                country: response.data.sys.country
            }
           setLocation(jsonObject);
           setIsLoading(false)
           setIsSuccessful(true)
        //   console.log(jsonObject);
        })
        .catch(function (error) {
            console.log(error);
            if (error.response.status === 404) {
                setHasNotFoundError(true)
                setIsLoading(false)
            }
            else {
                setHasError(true)
                setIsLoading(false)
            }
         });

    }


    return (
        <div>
            <Container>
                <Row>
                    <Col>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">

                                <input className="form-control py-4"
                                    name="cityName"
                                    ref={register({ required: "City name is required!" })}
                                    type="text"
                                    placeholder="Enter City Name"
                                    minLength="1"
                                    autoFocus
                                />
                                {errors.cityName && (
                                    <p className="text-center" style={{ fontSize: "0.7em", color: "red" }}>{errors.cityName.message}</p>
                                )}
                            </div>
                            <button type="submit"
                                className="btn btn-primary"> Get weather </button>
                        </form>

                        {/* Show ProgressSpinner */}
                        {isLoading && (
                            <div className="text-center mt-2">
                                <Spinner animation="border" variant="info" />
                            </div>
                        )}

                        {/* CITY NOT FOUND MSG */}
                        {hasNotFoundError && (
                            <div className="alert alert-danger mt-2">
                                <h6 className="alert-heading text-center">City Not Found</h6>
                            </div>
                        )}
                        {/* ERROR MSG */}
                        {hasError && (
                            <div className="alert alert-danger mt-2">
                                <h6 className="alert-heading text-center">Oops! Something went wrong</h6>
                            </div>
                        )}

                        {/* Show Card if no error */}
                        {isSuccessful && (
                            <Card 
                            location={location}
                            />
                          )}

                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default MainContent;