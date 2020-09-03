
import * as actionTypes from '../actionTypes';



export const loginType = (value) => {
    return {
        type: actionTypes.IS_LOGEDIN,
        payload: value
    }
}