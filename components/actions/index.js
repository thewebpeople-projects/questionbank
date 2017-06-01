import {LOGIN} from '../constants';

export default function loginAction(text){
    const action={
        type: LOGIN,
        text:text
    }
    console.log('action',action);
    return action;
}