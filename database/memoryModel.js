import mongoose from "mongoose"

const memoSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    created_at: {
        type: Date,
        default: new Date()
    }
})

const Memory = mongoose.model("memo", memoSchema)

export default Memory