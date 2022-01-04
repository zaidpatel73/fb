import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png';
import Module from './components';

function Nav(props) {
    return (
        <>
            <div className='nav'>
                <div className='nav-center'>
                    <Link to="/"><img id='logo' src={logo} alt="" /></Link>
                    <input type="search" name="Search" placeholder='  Search Facebook' id="search" />
                </div>
                <div className="nav-right">
                    {/* {Module.map(mod => {
                       return <Link key={mod} to={mod.routeProps.path}><i id='heart' className="fas fa-heart"></i></Link>
                    })} */}
                <Link to="/myLikes"><i id='heart' className="fas fa-heart"></i></Link>
                    <i className="fas fa-user-friends"></i>
                    <i className="fab fa-facebook-messenger"></i>
                    <i className="fas fa-globe-europe"></i>
                    <i className="fas fa-question-circle"></i>
                    <i id='user' className="far fa-user-circle"></i>
                    <i className="fas fa-caret-down"></i>
                </div>
            </div>
        </>
    );
}

export default Nav; 