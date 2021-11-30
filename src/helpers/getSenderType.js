import {app} from '../../firebase.js';
import {getFirestore, doc, getDoc} from 'firebase/firestore';   
 

/**
 * checks if the incoming number is from user, runner or lead
 * @param {string} number - number that sent the text
 * @returns {string} - the type of sender
 */

const getSenderType = async (number) => {

    const db = getFirestore(app)  
    console.log('Getting sender type.....');

    //check if number exists in both runner and user collections
    const usersDocRef = doc(db,'users', `+${number.toString()}`);
    const runnersDocRef = doc(db,'runners', `+${number.toString()}`);
    const usersDocSnap = await getDoc(usersDocRef);
    const runnersDocSnap = await getDoc(runnersDocRef);

    return usersDocSnap.exists() ? 'user'
        :  runnersDocSnap.exists() ? 'runner'
        :  'lead'
}

export default getSenderType;
