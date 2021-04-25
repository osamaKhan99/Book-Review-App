import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';


const NavItems = () => {

    const items = [
        {
            type: 'navItem',
            icon: 'home',
            name: 'Home',
            link: '/',
            restricted: false
        },
        {
            type: 'navItem',
            icon: 'user-circle',
            name: 'My Profile',
            link: '/user',
            restricted: false
        },
        {
            type: 'navItem',
            icon: 'sign-in',
            name: 'Login',
            link: '/login',
            restricted: false
        },
        {
            type: 'navItem',
            icon: 'file-text-o',
            name: 'My Reviews',
            link: '/user/reviews',
            restricted: false
        },
        {
            type: 'navItem',
            icon: 'edit',
            name: 'Add Review',
            link: '/add-review',
            restricted: false
        },
        {
            type: 'navItem',
            icon: 'sign-out',
            name: 'Logout',
            link: '/user/logout',
            restricted: false
        }
    ]

    const element = (item,i) => (
        <div key={i} className={item.type}>
            <Link to={item.link} >
                <FontAwesome name={item.icon} />
                {item.name}
            </Link>
        </div>
    )

    const showItems = () => {
        return(
            items.map((item,i)=>{
                return element(item,i)
            })
        )
    }

    return(
        <div>
            {showItems()}
        </div>
    )
}

export default NavItems;