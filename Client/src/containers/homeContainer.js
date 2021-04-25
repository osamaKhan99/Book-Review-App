import React, { Component } from 'react';
import { connect } from 'react-redux';
import getBooks from '../actions';
import BookItem from '../Widgets/bookItem';

class HomeContainer extends Component {

    componentDidMount(){
        this.props.dispatch(getBooks(3,0,'desc'))
    }

    
    renderItems = (books) => (
        books.list ? 
        books.list.map(item =>(
            <BookItem {...item} key={item._id} />
        ))
        : null
    )
    render(){
        console.log(this.props)
    return(
        <div>
             {this.renderItems(this.props.books)}
        </div>
    )
}
}

function mapStateToProps(state){
    return{
        books: state.books
    }
}

    

export default connect(mapStateToProps)(HomeContainer);