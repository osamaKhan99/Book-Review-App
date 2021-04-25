/* eslint-disable import/no-anonymous-default-export */
//const initialState = null;
export default function(state={}, action){
    switch(action.type){
        case 'GET_BOOKS':
            return { ...state, list: action.payload }
        default:
          return state
    }
}