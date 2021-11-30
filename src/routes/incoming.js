import {Router} from 'express';
import incomingMessageController from '../controllers/incomingMessageController.js'

const router = Router();

router.post('/', incomingMessageController.handleIncomingMessage);

export default router