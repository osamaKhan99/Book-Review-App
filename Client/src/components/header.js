import React, { useState } from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';
import Nav from './nav';

const Header = () => {

    const [ showNav, setNav ] = useState(false)

    const hideNav = () =>{
        setNav(showNav)
        console.log("nav closed");
    }


    return(
       <header>
           <div className="open_nav">
            <FontAwesome 
            onClick={()=> setNav(!showNav)}
            name="bars"
            style={{
                padding: '10px',
                color: '#fff',
                cursor: 'pointer'
            }}
        />
       </div>
       <Nav 
        showNav={showNav}
        hideNav={()=>hideNav()}
       />
       <Link to="/" className="logo">Rate My Book</Link>
       </header>


    )
}
export default Header;