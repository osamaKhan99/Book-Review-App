import React, { Component } from 'react';
import { connect } from 'react-redux';
import  {getBooks, getUsers}  from '../actions';
import BookItem from '../Widgets/bookItem';

class HomeContainer extends Component {

    componentDidMount(){
        this.props.dispatch(getBooks(3,0,'desc'))
        this.props.dispatch(getUsers())
    }

    
    renderItems = (books) => (
        books.list ? 
        books.list.map(item =>(
            <BookItem {...item} key={item._id} />
        ))
        : null
    )

    loadmore = () => {
        let count = this.props.books.list.length;
        this.props.dispatch(getBooks(1,count,'desc',this.props.books.list))
    }
    render(){
        console.log(this.props)
    return(
        <div>
             {this.renderItems(this.props.books)}
             <div className="loadmore" onClick={this.loadmore}>Load More</div>
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