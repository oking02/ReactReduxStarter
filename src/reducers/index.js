/**
 * Created by ollyking on 11/04/2016.
 */
import { combineReducers } from 'redux';
import testReducer  from './test_reducer';

const rootReducer = combineReducers({
    test : testReducer
});

export default rootReducer;