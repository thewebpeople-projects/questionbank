import {LOGIN} from '../constants';

export const login = (text)=>{
    const action={
        type: LOGIN,
        text
    }
    console.log('action',action);
    return action;
}