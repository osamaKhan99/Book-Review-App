import { combineReducers } from 'redux';
import books from './book';
import user from './user';

const rootReducer = combineReducers({
    books,
    user
});

export default rootReducer;