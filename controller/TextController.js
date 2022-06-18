import asyncHandler from 'express-async-handler'
import { validationResult } from 'express-validator'
import TextMessage from '../models/TextMessageModel.js'

const getUserTextMessage = asyncHandler(async (req, res) => {
  const messages = await TextMessage.find({})

  return res.status(201).json({ messages: messages })
})

const saveTextMessage = asyncHandler(async (req, res) => {
  console.log(req.body)
  const error = validationResult(req)
  if (!error.isEmpty()) {
    console.log(error.array)
    return res.status(400).json({ errors: error.array() })
  }
  const { Message } = req.body

  const msg = await TextMessage.create({ Message })

  return res.status(201).json({ message: 'Message Saved!!' })
})

export { getUserTextMessage, saveTextMessage }
