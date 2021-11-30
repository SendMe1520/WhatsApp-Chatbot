import {app} from '../../firebase.js';
import {getFirestore, doc, setDoc, updateDoc} from 'firebase/firestore'; 

export default class Session{
    
    constructor (id , convo){
        this.last_response = convo.last_response;
        this.current_step = convo.current_step;
        this.previous_step = convo.previous_step;
        this.documentId = id;
        this.db = getFirestore(app);
    }


    isInSession(){
    
        const timeDiff = Date.now() - this.last_response

        if(timeDiff > 300000){

            //Session expired
            this.initializeSession()
            return false

        }else{

            return true
        }
    }

    async initializeSession(){

        const data = {
            convo: {
                previous_step: '',
                current_step: 'main_menu',
                last_response: Date.now()
            }
        }

        try{
            await updateDoc(doc(this.db, "users", `+${this.documentId}`), data);
        }catch(e){
            console.log(e)
        }

    }

    async updateSession(current, prev){

        const data = {
            convo: {
                previous_step: '',
                current_step: 'main_menu',
                last_response: Date.now()
            }
        }

        try{
            await updateDoc(doc(this.db, "users", `+${this.documentId}`), data);
        }catch(e){
            console.log(e)
        }

    }

    async updateSessionSteps(convo){
        const data = {
            convo: {
                previous_step: convo.previous_step,
                current_step: convo.current_step,
                last_response: Date.now()
            }
        }

        try{
            await updateDoc(doc(this.db, "users", `+${this.documentId}`), data);
        }catch(e){
            console.log(e)
        }
    }
}
