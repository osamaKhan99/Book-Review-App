import React from 'react';
import { SideNav } from 'react-simple-sidenav';
import NavItems from './navItems';

const Nav = (props) =>{
    return(
        <div>
            <SideNav showNav={props.showNav} hideNav={props.hideNav}
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