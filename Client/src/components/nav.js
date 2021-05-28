import React from 'react';
import { SideNav } from 'react-simple-sidenav';
import NavItems from './navItems';

const Nav = (props) =>{
    console.log(props)
    return(
        
        <div>
            <SideNav showNav={props.showNav} onHideNav={props.onHideNav}
             navStyle={{
                 background:  '#2f2f2f',
                 maxWidth: '280px'
             }}
            >
                <NavItems/>
            </SideNav>
        </div>
    )
}
export default Nav;