import React from "react";
import Logo from './YouTube-Logo-PNG7.png'

const SearchBar = () => {
    return (
        
        <div className="hero">
            <img src={Logo} alt="Logo"/>
            <div className="searchBar">
                <input type="text" placeholder="Search..." id="input"/>
            </div>
        </div>
    )
}

export default SearchBar