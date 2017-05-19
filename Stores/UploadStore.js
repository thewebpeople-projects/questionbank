import { EventEmitter } from "events";

class UploadStore extends EventEmitter{
     constructor(){
         super();
         
     }

    createFile(details){
        
        details.filename,
        details.degree,
        details.course,
        details.semester,
        details.exam,
        details.subject,
        details.college
    }
}


const uploadstore= new UploadStore;

export default uploadstore;