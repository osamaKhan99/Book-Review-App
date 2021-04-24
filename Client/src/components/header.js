import React, { useState } from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';
import Nav from './nav';

const Header = () => {

    const [ showNav, setNav ] = useState(0)

    const HideNav = () =>{
        setNav({showNav:false})
    }

    return(
       <header>
           <div className="open_nav">
            <FontAwesome 
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
        HideNav={()=>{this.HideNav()}}
       />
       <Link to="/" className="logo">Rate My Book</Link>
       </header>


    )
}
export default Header;