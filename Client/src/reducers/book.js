/* eslint-disable import/no-anonymous-default-export */
//const initialState = null;
export default function(state={}, action){
    switch(action.type){
        case 'GET_BOOKS':
            return { ...state, list: action.payload }
        case 'GET_BOOK':
            return{ ...state, book: action.payload}
        case 'GET_REVIEW':
            return {
                ...state,
                book: action.payload.book,
                reviewer: action.payload.reviewer
            }
        case 'CLEAR_REVIEW':
            return{
                ...state,
                book: action.payload.book,
                reviewer: action.payload.reviewer
            }
        case 'ADD_REVIEW':
            return{
                ...state,
                newBook: action.payload
            }
        case 'CLEAR_BOOK':
            return{
                ...state,
                newBook: action.payload
            }
        case 'UPDATE_BOOK':
            return{
                ...state,
                updateBook: action.payload.updated,
                book: action.payload.doc
            }
        case 'DELETE_BOOK':
            return{
                ...state,
                postDelted: action.payload
            }
        case 'CLEAR_DATA':
            return{
                ...state,
                updateBook: action.payload.updateBook,
                postDelted: action.payload.postDelted,
                book: action.payload
            }
        default:
          return state
    }
}