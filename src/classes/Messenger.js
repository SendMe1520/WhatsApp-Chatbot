import twilio from 'twilio';
import messages from '../messages/chatbotMessages.js'

export default class Messenger{

    constructor(){
        this.accountSid = 'AC5ba03c90b271787045d856c74344684a';
        this.authToken = '4cdd2a6cdc52dbe7e66493a61236617f'
        twilio(this.accountSid, this.authToken);
    }

    static replyWithInitialMessage(res){
        console.log('INITIALIZE MESSAGE')

        const { MessagingResponse } = twilio.twiml;
        const twiml = new MessagingResponse();
        
        try{

            twiml.message(messages.main_menu);
            res.set('Content-Type', 'text/xml');
            return res.status(200).send(twiml.toString());

        }catch(e){
            console.log(e)
        }
    }

    static replyWithError(res){
        console.log('SEND ERROR AND PREVIOUS')

        const { MessagingResponse } = twilio.twiml;
        const twiml = new MessagingResponse();
        
        try{

            twiml.message(messages.incorrect_input);
            twiml.message(messages.main_menu);
            res.set('Content-Type', 'text/xml');
            return res.status(200).send(twiml.toString());
            
        }catch(e){
            console.log(e)
        }
    }
    
    static reply(res, convo){
        console.log('REPLY NEXT STEP')

        const { MessagingResponse } = twilio.twiml;
        const twiml = new MessagingResponse();
        
        try{
            
            twiml.message(messages[convo.current_step]);
            res.set('Content-Type', 'text/xml');
            return res.status(200).send(twiml.toString());
            
        }catch(e){
            console.log(e)
        }
    }
}