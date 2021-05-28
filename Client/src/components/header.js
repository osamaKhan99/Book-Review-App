import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';
import Nav from './nav';

class Header extends Component {

    state = {
        showNav:false
    }

    onHideNav = () => {
        this.setState({showNav:false})
    }

    render(){
        return(
        <header>
            <div className="open_nav">
                <FontAwesome 
                onClick={()=>this.setState({showNav:true})}
                name="bars"
                style={{
                    padding: '10px',
                    color: '#fff',
                    cursor: 'pointer'
                }}
            />
        </div>
        <Nav 
            showNav={this.state.showNav}
            onHideNav={()=>this.onHideNav()}
        />
        <Link to="/" className="logo">Rate My Book</Link>
        </header>


        )
    }
}
export default Header;