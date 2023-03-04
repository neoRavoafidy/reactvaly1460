import React from 'react';
import { NavLink } from 'react-router-dom';
// import Header from './Header';

const Navbar = () => {
    return (
        <div>
            {/* <Header/> */}
            <div className="container">
            <div className="nav nav-pills" >
                <NavLink className="flex-sm-fill text-sm-center nav-link" id='navfont' to="/">Tableaux de bord</NavLink>
                <NavLink className="flex-sm-fill text-sm-center nav-link" id='navfont' to="/List">Liste employé</NavLink>
                <NavLink className="flex-sm-fill text-sm-center nav-link" id='navfont' to="/Dep">Département</NavLink>
                <NavLink className="flex-sm-fill text-sm-center nav-link" id='navfont' to="/Contact">Contact</NavLink> 
            </div>
        </div>
        </div>
    );
}

export default Navbar;
