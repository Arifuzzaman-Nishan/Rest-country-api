import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CountriesDetails = () => {
    const { name } = useParams();
    const [countryName, setCountryName] = useState([]);

    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${name}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setCountryName(data))
    }, [name])

    return (
        <div>
            {
                countryName.map(country => <div className='d-flex justify-content-center mt-5 container'>
                    <div className="card mb-5" style={{ width: '20rem' }}>
                        <img src={country.flag} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h1 className="card-title text text-danger">{country.name}</h1>
                            <h3>Capital: {country.capital}</h3>
                            <h5>Population: {country.population}</h5>
                            <h5>Region: {country.region}</h5>
                            <h5>Subregion: {country.subregion}</h5>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default CountriesDetails;
