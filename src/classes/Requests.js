import {app} from '../../firebase.js';
import {getFirestore, setDoc, addDoc, doc, updateDoc} from 'firebase/firestore';

export default class Requests{

    constructor(){

        this.db = getFirestore(app);

    }

    static async initializeRequest (number, requestType, col){
    
        console.log('INITIALIZING REQUEST')
        const db = getFirestore(app)
        const data = {
            
            request_type: requestType
        }
    
        try{
            await setDoc(doc(db, col, `+${number}`), data)
        }catch(e){
            console.log(e)
        }
    
    }

    static async updateRequest(number, data, col){


        console.log('UPDATING REQUEST')
        const db = getFirestore(app);
    
        try{
            const docRef = doc(db, col, `+${number}`)
            await updateDoc(docRef, data);
        }catch(e){
            console.log(e)
        }
    
    }
}