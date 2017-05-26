import {LOGIN} from '../constants';

const qbank = (token='',action)=>{
    switch(action.type){
        case LOGIN:
            token=action.text;
            return token;
        default:
            return token;
            
    }
}

export default qbank;