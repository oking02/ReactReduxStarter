/**
 * Created by ollyking on 11/04/2016.
 */

export const TEST = 'TEST';


export function changeTest(test) {
    
    return {
        type: TEST,
        payload: test
    }
    
}
