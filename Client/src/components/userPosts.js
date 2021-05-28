import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userPost } from '../actions';
import { Link } from 'react-router-dom';
import moment from 'moment-js';
 
class UserPost extends Component{


    componentDidMount(){
        this.props.dispatch(userPost(this.props.user.login.id))
    }

    showPost = (user) => (
        user.post ?
            (<div>
                <h1 className="reviewTitle">Your Reviews</h1>
                {
                    user.post.map(item=>(
                        <div key={item._id} className="reviewContainer">
                            <Link to={`/user/edit-post/${item._id}`} >
                            <h2 className="reviewHeader">{item.name}</h2>
                            </Link>
                            <h5 className="reviewItem">{item.author}</h5>
                            <h5 className="reviewItem">{moment(item.createAt).format("DD/MM/YYYY")}</h5>   
                        </div>
                    ))
                }
            </div>)
        : <div>You have not review anything yet.</div>
    )

    render(){
        // console.log(this.props)
         let user = this.props.user
        return(
            <div>
                {this.showPost(user)}
            </div>
        )
    }
}


function mapStateToProps(state){
    return{
        user: state.user
    }
}

export default connect(mapStateToProps)(UserPost)
