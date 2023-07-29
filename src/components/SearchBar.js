import React from "react";
import Logo from './YouTube-Logo-PNG7.png'
import { useState } from "react";

const SearchBar = (props) => {

    const [searchTerm, setSearchTerm] = useState('')

    const handleChange = (event) => { 
        setSearchTerm(event.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onFormSubmit(searchTerm);
      };

    return (
        
        <div className="hero">
            <img src={Logo} alt="Logo" id="logo"/>
            <form className="searchBar" onSubmit={handleSubmit}>
                <input type="text" placeholder="Search..." id="input" onChange={handleChange}/>
                {/* <button type="submit">Search</button> */}
            </form>
        </div>
    )
}

export default SearchBar