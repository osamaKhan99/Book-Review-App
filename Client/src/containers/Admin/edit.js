import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBook, updateBook, deleteBook, clearData } from '../../actions'

class EditReview extends PureComponent {


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

    componentDidMount(){
        this.props.dispatch(getBook(this.props.match.params.id))
        console.log("EDIT PROPS ", this.props.books.book)
    }
        
    componentDidUpdate(prevprops){
        if(this.props.books !== prevprops.books){

        let book = this.props.books.book

        this.setState({
            formData:{
                _id: book._id,
                name: book.name,
                author: book.author,
                review: book.review,
                rating: book.rating,
                pages: book.pages,
                price: book.price
            }
        })
    }
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

    submit = (e) => {
        e.preventDefault();
        this.props.dispatch(updateBook(this.state.formData))
    }

    deleteBook = () => {
        this.props.dispatch(deleteBook(this.props.match.params.id))
        console.log("post deleted")
    }

    redirectUser = () => {
        setTimeout(()=>{
            this.props.history.push('/user/reviews')
        },1000)
        console.log("redirecting user")
    }

    componentWillUnmount(){
        this.props.dispatch(clearData())
    }

    render(){
        //console.log(this.props.books.newBook.bookId)
        console.log(this.props)
        let data = this.state.formData
        let books = this.props.books
        return(
            <div className="rl_container article">
               
                <div>
                    {
                        books.postDelted ? 
                        <div className="red_tag"> Post Deleted {this.redirectUser()} </div>
                        :null
                    }
                </div>

                <div>
                {
                        books.updateBook ?
                        <div className="edit_confirm">
                            <Link to={`/books/${books.book._id}`}>Your Post has been updated.</Link>
                        </div>
                        :null
                    }
                </div>
                <form onSubmit={this.submit}>
                    <h2>EDIT REVIEW</h2>

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
                        
                    <button type="submit">EDIT</button> 
                    <div className="delete_post">
                        <div className="button" onClick={this.deleteBook}>DELETE</div>
                    </div>
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

export default connect(mapStateToProps)(EditReview)