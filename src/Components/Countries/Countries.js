import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
} from "react-router-dom";
import './Countries.css'

const Countries = (props) => {
    console.log(props);
    const { name, flag } = props.country;
    
    const history = useHistory();

    const showDetails = (name)=>{
        history.push(`/countryname/${name}`);
    }

    return (
        <div>
            <div className="card mb-5" style={{ width: '18rem' }}>
                <img src={flag} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                    <button onClick = {() => showDetails(name)} className='btn btn-danger'>
                        Show Details
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Countries;