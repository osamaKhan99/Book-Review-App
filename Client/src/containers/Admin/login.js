import React, { Component } from "react";
import { connect } from 'react-redux';
import { loginUser } from '../../actions'

class Login extends Component {

    state = {
        email:'',
        password:'',
        error:'',
        success: false
    }
    componentDidMount(){
        this.props.dispatch(loginUser(this.state))
    }


    onSubmit = (e) =>{
        e.preventDefault();
        this.props.dispatch(loginUser(this.state))
        this.setState({success: true})
        
    }

    handleInputEmail = (event) => {
        this.setState({email:event.target.value})
    }

    handleInputPassword = (event) => {
        this.setState({password:event.target.value})
    }

    // componentDidUpdate(nextProps){
    //     if(nextProps.user.login.isAuth){
    //         this.props.history.push("/user")
    //     }

    // }
    componentDidUpdate(prevProps, prevState) {
        if (this.props.user.login.isAuth) {
          this.props.history.push('/user')
        }
      }

    render(){
        return(
            <div className="rl_container">
                <form onSubmit={this.onSubmit}>
                    <h2>Login</h2>
                    <div className="form_element">
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            value={this.state.email}
                            onChange={this.handleInputEmail}
                        />
                    </div>

                    <div className="form_element">
                        <input
                            type="password"
                            placeholder="Enter Your Password"
                            value={this.state.password}
                            onChange={this.handleInputPassword}
                        />
                    </div>
                    <button type="submit">
                        Login
                    </button>

                </form>
            </div>
        )
    }
} 

function mapStateToProps(state){
    console.log(state)
    return {
        user: state.user
    }
}


export default connect(mapStateToProps)(Login)