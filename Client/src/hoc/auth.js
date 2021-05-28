import React , {Component} from 'react';
import { connect } from 'react-redux';
import { Auth } from '../actions';


export default function AuthComponent(ComposedClass,access){

    class Authentication extends Component{

        state = {
            loading: true
        }

        componentDidMount(){
            this.props.dispatch(Auth())
        }

        componentDidUpdate(prevProps,prevState){
            console.log(prevProps)
            if(this.state.loading){
                this.setState({loading: false})
            }

            if(!this.props.user.login.isAuth){
                if(access)
                this.props.history.push('/login')
            }else{
                if(access === false)
                this.props.history.push('/user')
            }
        }

        render(){
            if (this.state.loading){
                <div className="loader">Loading....</div>
            }

            return(
                <div>
                    <ComposedClass {...this.props} user={this.props.user} />
                </div>
            )
        }
    }

    function mapStateToProps(state){
        console.log(state, "AUTH STATE")
        return{
            user: state.user
        }
    }

    return connect(mapStateToProps)(Authentication);
}