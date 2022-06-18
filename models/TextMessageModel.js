import mongoose from 'mongoose'

const TextMessageSchema = mongoose.Schema(
  {
    Message: {
      type: String,
      trim: true,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)
const TextMessage = mongoose.model('TextMessage', TextMessageSchema)

export default TextMessage
