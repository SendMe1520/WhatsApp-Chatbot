
import getSenderType from '../helpers/getSenderType.js';
import '../classes/User.js';
import handleUser from '../helpers/handleUser.js';

class incomingMessageController {
  
  static async handleIncomingMessage(req, res, next) {

    //Reply object to be passed into reply message to send reply
    let replyObject = {};
    
    //find out who is sending the message: user/runner/lead?
    const senderType = await getSenderType(req.body.WaId);


    switch (senderType){

      //Handle user reply process
      case 'user':

        handleUser(req, res);

      //Handle runner reply process
      case 'runner':

      //Handle lead reply process
      default:

    }

  }
}

export default incomingMessageController;