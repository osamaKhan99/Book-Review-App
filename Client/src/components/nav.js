import React from 'react';
import { SideNav } from 'react-simple-sidenav';

const Nav = (props) =>{
    return(
        <div>
            <SideNav showNav={props.showNav}>
                Items Listed Here
            </SideNav>
        </div>
    )
}
export default Nav;