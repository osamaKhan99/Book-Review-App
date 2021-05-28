import React, { Component } from 'react';
import { addBook, clearBook } from '../../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class AddReview extends Component {

    state = {
        formData:{
            name: '',
            author: '',
            review: '',
            pages: '',
            rating: '',
            price: ''
        }
    }

    submit = async (e) => {
        e.preventDefault();
        await this.props.dispatch(addBook({
            ...this.state.formData,
            ownerId: this.props.user.login.id
        }))
    }

    handleInput(event, name){
        const newData = {
            ...this.state.formData
        }
        newData[name] = event.target.value
        this.setState({
            formData: newData
        })
    }

     componentWillUnmount(){
        this.props.dispatch(clearBook())
    }

    render(){
        //console.log(this.props.books.newBook.bookId)
        let data = this.state.formData
        return(
            <div className="rl_container article">
                <form onSubmit={this.submit}>
                    <h2>ADD REVIEW</h2>

                    <div className="form_element">
                        <input type="text" placeholder="Book title" 
                            value={data.name}
                            onChange={(event)=>this.handleInput(event, 'name' )}
                        />
                    </div>

                    <div className="form_element">
                        <input type="text" placeholder="Author Name" 
                            value={data.author}
                            onChange={(event)=>this.handleInput(event, 'author' )}
                        />
                    </div>

                    <textarea 
                        placeholder="Your Review"
                        value={data.review}
                        onChange={(event)=>this.handleInput(event,'review')}
                    />

                    
                    <div className="form_element">
                        <input type="number" placeholder="Number Of Pages" 
                            value={data.pages}
                            onChange={(event)=>this.handleInput(event, 'pages' )}
                        />
                    </div>


                    <div className="form_element">
                        <select value={data.rating} onChange={(event)=>this.handleInput(event,'rating')}>
                            <option val="1">1</option>
                            <option val="2">2</option>
                            <option val="3">3</option>
                            <option val="4">4</option>
                            <option val="5">5</option>
                        </select>
                    </div>
                    <div className="form_element">
                        <input type="text" placeholder="Price in $" 
                            value={data.price}
                            onChange={(event)=>this.handleInput(event, 'price' )}
                        />
                    </div>
                        
                    <button type="submit" >   
                    { this.props.books.newBook ?
                        <Link to={`/books/${this.props.books.newBook.bookId}`}>
                            ADD
                        </Link>
                    : null}
                    ADD</button> 

            


                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state)
    return{
        books: state.books
    }
}

export default connect(mapStateToProps)(AddReview)