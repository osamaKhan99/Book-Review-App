import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


const NavItems = (props) => {

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
            restricted: true
        },
        {
            type: 'navItem',
            icon: 'sign-in',
            name: 'Login',
            link: '/login',
            restricted: false,
            excluded: true
        },
        {
            type: 'navItem',
            icon: 'sign-in',
            name: 'Register',
            link: '/user/register',
            restricted: false,
            excluded: true
        },
        {
            type: 'navItem',
            icon: 'file-text-o',
            name: 'My Reviews',
            link: '/user/reviews',
            restricted: true
        },
        {
            type: 'navItem',
            icon: 'edit',
            name: 'Add Review',
            link: '/user/add',
            restricted: true
        },
        {
            type: 'navItem',
            icon: 'sign-out',
            name: 'Logout',
            link: '/user/logout',
            restricted: false,
            excluded: true
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

    console.log(props)
    const showItems = () => (
                items.map((item,i)=>{
                    return element(item,i)
                })
    )

    return(        
        <div>
            {showItems()}
        </div>
    )
}

function mapStateToProps(state){
    console.log(state)
    return{
        user: state.user
    }
}

export default connect(mapStateToProps)(NavItems)