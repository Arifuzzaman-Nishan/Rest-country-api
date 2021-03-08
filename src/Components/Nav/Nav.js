import React from 'react';
import { Link } from 'react-router-dom';
const Nav = () => {
    return (
        <div className='container'>
            <nav className="navbar navbar-dark bg-dark mb-3 mt-3">
                <div className="container-fluid">
                    <Link className='text-white' to='/home'>Home</Link>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    );
};

export default Nav;