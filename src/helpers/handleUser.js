import Session from "../classes/Session.js";
import User from  "../classes/User.js";
import Messenger from "../classes/Messenger.js";
import processReply from "./processUserReply.js";


const handleUser = async (req, res) =>{

    console.log(req.body)
    const user = new User(req, res);
    const userObject = await user.getUser()
    const session = new Session(req.body.WaId, userObject.convo)

    if(!session.isInSession() || userObject.convo.current_step === ''){
        session.initializeSession()
        Messenger.replyWithInitialMessage(res)
        return
    }

    const convo = processReply(req, userObject.convo.current_step)

    if(!convo){
        Messenger.replyWithError(res)
        return
    }

    Messenger.reply(res, convo)
    session.updateSessionSteps(convo)
    
}

export default handleUser; 