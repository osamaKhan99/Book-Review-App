import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers, registerUser } from '../../actions';

class Register extends Component {


    state = {
        email: '',
        password: '',
        firstname: '',
        lastname: '',
        error: ''
    }

    componentDidMount(){
        this.props.dispatch(getUsers())
        this.props.dispatch(registerUser(this.state))
    }

    handleInputEmail = (event) => {
        this.setState({email: event.target.value})
    }

    handleInputFirstname = (event) => {
        this.setState({firstname: event.target.value})
    }

    handleInputLastname = (event) => {
        this.setState({lastname: event.target.value})
    }

    handleInputPassword = (event) => {
        this.setState({password: event.target.value})
    }

    submitform = (e) => {
        e.preventDefault();
        this.setState({error: ''})
        this.props.dispatch(registerUser({
            email: this.state.email,
            password: this.state.password,
            firstname: this.state.firstname,
            lastname: this.state.lastname

        }))
    }

    showUsers = (user) => (
        user.users ? 
        user.users.map(item => (
            <tr key={item._id}>
                <td>{item.firstname}</td>
                <td>{item.lastname}</td>
                <td>{item.email}</td>
            </tr>
        ))
        : null
    )

    componentDidUpdate(prevProps, prevState) {
        if (this.props.user.register.success) {
          this.props.history.push('/user')
        }
      }

    render(){
        console.log(this.props)
        return(
            <div className="rl_container">
                <form onSubmit={this.submitform}>
                    <h2>ADD USER</h2>

                    {/* <div>
                        (
                            user.success ?
                            <Link to={`/user/${user._id}`}>Congratulations ! You have registered</Link>
                        )
                    </div> */}
                    <div className="form_element">
                        <input 
                        type="text"
                        placeholder="Enter first name"
                        value={this.state.firstname}
                        onChange={this.handleInputFirstname}
                        /> 
                    </div>

                    <div className="form_element">
                        <input 
                        type="text"
                        placeholder="Enter last name"
                        value={this.state.lastname}
                        onChange={this.handleInputLastname}
                        /> 
                    </div>

                    <div className="form_element">
                        <input 
                        type="email"
                        placeholder="Enter email address"
                        value={this.state.email}
                        onChange={this.handleInputEmail}
                        /> 
                    </div>

                    <div className="form_element">
                        <input 
                        type="password"
                        placeholder="Enter Password"
                        value={this.state.password}
                        onChange={this.handleInputPassword}
                        /> 
                    </div>

                    <button type="submit">Register</button>
                    <div className="error">
                        {this.state.error}
                    </div>
                    
                </form>
                <div className="current_users">
                    <h4>Current Users</h4>
                    <table>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email ID</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.showUsers(this.props.user)}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        user: state.user
    }
}


export default connect(mapStateToProps)(Register)