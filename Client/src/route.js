import React from 'react';
import { Switch, Route } from 'react-router-dom';
//import Book from './components/book';
import BookView from './containers/bookContainer';
import Home from './components/home';
import Layout from './hoc/layout';
import login from './containers/Admin/login';
import AuthComponent from './hoc/auth';
import User from './components/profile';
import AddReview from './containers/Admin/add_review';
import UserPosts from './components/userPosts';
import EditReview from './containers/Admin/edit'
import Register from './containers/Admin/register';
import Logout from './containers/Admin/logout';


const Routes = () => {
    return(
        <Layout>
            <Switch>
                <Route path="/" exact component={AuthComponent(Home,null)} />
                <Route path="/login" exact component={AuthComponent(login,false)} />
                <Route path="/user" exact component={AuthComponent(User,true)} />
                <Route path="/user/add" exact component={AuthComponent(AddReview,true)} />
                <Route path="/user/logout" exact component={AuthComponent(Logout,true)} />
                <Route path="/user/register" exact component={AuthComponent(Register,null)} />
                <Route path="/user/edit-post/:id" exact component={AuthComponent(EditReview,true)} />
                <Route path="/user/reviews" exact component={AuthComponent(UserPosts,true)} />
                <Route path="/books/:id" exact component={AuthComponent(BookView,true)} />
            </Switch>
        </Layout>
    )
}
export default Routes;