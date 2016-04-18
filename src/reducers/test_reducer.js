/**
 * Created by ollyking on 11/04/2016.
 */
import {TEST} from '../actions'

export default function(state="Hello World Test", action) {
    
    switch (action.type) {
        
        case TEST:
            return action.payload
    }
    
    return state;
    
}