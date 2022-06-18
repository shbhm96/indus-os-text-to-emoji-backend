import express from 'express'
import { body } from 'express-validator'
import {
  getUserTextMessage,
  saveTextMessage,
} from '../controller/TextController.js'

const router = express.Router()

router.post('/addText', body('Message').not().isEmpty(), saveTextMessage)
router.get('/getMessages', getUserTextMessage)

export default router
