import {app} from '../../firebase.js';
import {getFirestore, doc, getDoc} from 'firebase/firestore'; 

export default class User{


    constructor (req, res){
        this.number = req.body.WaId;
        this.message = req.body.Body;
        this.response = res;
        this.db =  getFirestore(app)
    }


    /**
     * checks if the incoming number is from user, runner or lead
     * @param {string} number - number that sent the text
     * @returns {Object} - user object
     */

    async getUser(){

        try{
            const usersDocRef = doc(this.db,'users', `+${this.number}`);
            const usersDocSnap = await getDoc(usersDocRef);
            return usersDocSnap.data();
        }catch(e){
            console.log(e)
        }


    }


}