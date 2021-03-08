import React, { useEffect, useState } from 'react';

import Countries from '../Countries/Countries';
import './Home.css';

const Home = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        const url = "https://restcountries.eu/rest/v2/all";
        fetch(url)
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    console.log(countries);
    return (
        <div className="container">
             <h1>Total Countries: {countries.length}</h1>
            <div className='grid'>
                {
                    countries.map(country => <Countries key={country.alpha2Code} country={country}></Countries>)
                }
            </div>
        </div>
    );
};

export default Home;