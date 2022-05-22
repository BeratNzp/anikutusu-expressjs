import express from "express"
import mongoose from "mongoose"

import Memory from "../database/memoryModel.js"

const router = express.Router()

router.get("/", async (req, res) => {
    try {
        const memories = await Memory.find()
        res.status(200).json(memories)
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
})

router.get("/:id", async (req, res) => {
    try {
        
        const { id } = req.params
        

        if(!mongoose.Types.ObjectId.isValid(id))
            res.status(404).json({
                message: "Memory ID is not valid"
            })
        
        const memory = await Memory.findById(id)
        if(!memory) return
            res.status(200).json(memory)
    } catch (error) {
        res.status(404).json({
            message: error
        })
    }
})

router.post("/", async (req, res) => {
    try {
        const { title, content,image } = req.body
        const memory = new Memory({
            title,
            content,
            image
        })
        const createdMemory = await Memory.create(memory)
        res.status(201).json(createdMemory)
    } catch (error) {
        res.json({
            message: error
        })
    }
})

router.put("/:id", async (req, res) => {
try {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id))
        res.status(404).json({
            message: "Memory ID is not valid."
        })

    const { title, content, image} = req.body
    const updatedMemory = await Memory.findByIdAndUpdate(id, { title, content, image, _id: id}, { new: true })
    res.status(200).json(updatedMemory)
} catch (error) {
    res.json({
        message: error
    })
}
})

router.delete("/:id", async (req, res) => {
try {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id))
        res.status(404).json({
            message: "Memory ID is not valid."
        })

    const deletedMemory = await Memory.findByIdAndDelete(id)
    res.status(200).json(deletedMemory)
} catch (error) {
    
}
})


export default router