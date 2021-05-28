/* eslint-disable import/no-anonymous-default-export */
const initialState = null
export default function(state=initialState, action){
    switch(action.type){
        case 'LOGIN':
            return {
                ...state,
                login: action.payload
            }
        case 'AUTH':
            return {
                ...state,
                login: action.payload
            }
        case 'USER_POST':
            return {
                ...state,
                post: action.payload
            }
        case 'GET_USERS':
            return{
                ...state,
                users: action.payload
            } 
        case 'REGISTER_USER':
            return{
                ...state,
                register: action.payload
                
            } 
        default:
            return state
    }
}