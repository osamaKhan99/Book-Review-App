import axios from 'axios';


export function getBooks(limit=10, start=0, order='asc', list = ''){

    const request =  axios.get(`api/books?limit=${limit}&skip=${start}&order=${order}`)
    .then(response => 
        list ?  [...list, ...response.data] : response.data
    )
    return {
        type: 'GET_BOOKS',
        payload: request
    }
        
}

export function BookReview(id){
    console.log("Book Action Recieve")

    const request =  axios.get(`/api/getBook?id=${id}`)
    console.log(request)
    
    return (dispatch) => {
        console.log("function Run")
        request.then(({data})=>{
            let book = data
            console.log(book)
            axios.get(`/api/getReviewer?id=${book.ownerId}`)
            .then(({data})=>{
                let response = {
                    book,
                    reviewer: data
                }
                console.log(response);
                dispatch({
                    type: 'GET_REVIEW',
                    payload:response
                })
                console.log("Action finish")
            })

        })
    }
}

export function clearBook(){
    return{
       type: 'CLEAR_REVIEW',
       payload: {
        book: {},
        reviewer: {}
       }
    }
}

export function addBook(book){

    const request = axios.post('/api/book',book)
        .then(response => response.data)
            console.log(request)

    return{
        type: 'ADD_REVIEW',
        payload: request
    }
}


export function getBook(id){
    const request = axios.get(`/api/getBook?id=${id}`)
        .then( response => response.data)

    return{
        type: 'GET_BOOK',
        payload: request
    }
}

export function updateBook(data){
    const request = axios.patch(`/api/updateBook`,data)
    .then( response => response.data)

    return{
        type: 'UPDATE_BOOK',
        payload: request
    }
}

export function deleteBook(id){
    const request = axios.delete(`/api/deleteBook?id=${id}`)
    .then(response => response.data)

    return{
        type: 'DELETE_BOOK',
        payload: request
    }
}

export function clearData(){

    return{
        type: "CLEAR_DATA",
        payload: {
            updateBook: false,
            book:null,
            postdelted: false
        }
    }
}

//<====== USER =========> //




export  function loginUser({email,password}){

    const request =  axios.post("/api/login",{email,password})
                    .then(response => response.data)

        return{
            type: 'LOGIN',
            payload: request
        }
}

export  function Auth(){
     
    const request =  axios.get('/api/auth')
            .then( response => response.data)

    return{
        type: 'AUTH',
        payload: request
    }
}

export function clearReview(){
    return {
        type: 'CLEAR_BOOK',
        payload: {}
    }
}

export function userPost(userId){

    const request =  axios.get(`/api/user_post?user=${userId}`)
    .then(response => response.data)

    return{
        type: 'USER_POST',
        payload: request
    }
}

export function getUsers(){

    const request = axios.get('/api/users')
    .then(response => response.data)

    return {
        type: 'GET_USERS',
        payload: request
    }
}

export function registerUser(data) {

    const request = axios.post(`/api/register`,data)
    .then( response => response.data)

    return{
        type: 'REGISTER_USER',
        payload: request
    }
}