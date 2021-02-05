import asyncHandler from 'express-async-handler';
import Realtor from '../models/realtorModel.js';


//@desc Get All Realtors
//@route GET /api/realtors/
//@access PUBLIC
const getAllRealtors = asyncHandler(async(req, res) =>{
    const realtors = await Realtor.find();
    res.json(realtors)
})

//@desc Get Single Realtor
//@route GET /api/realtors/:id
//@access PUBLIC
const getSingleRealtor = asyncHandler(async(req, res) =>{
    const id = req.params.id;
    const realtor = await Realtor.findById(id);
    if(!realtor){
        res.status(404)
        throw new Error(`Could not find Realtor with an id of ${req.params.id}`)
    } else {
        res.json(realtor)
    }
})

//@desc Create Realtor
//@route POST /api/realtors/
//@access PRIVATE --admin
const createRealtor = asyncHandler(async(req,res) =>{
    const id = req.user._id;
    const { name, about, email, phone } = req.body;
    const realtorExists = await Realtor.findById(id)
    if(realtorExists){
        res.status(400)
        throw new Error('User already has a realtor profile setup.')
    }
    const realtor = Realtor.create({
        name, about, email, phone
    })
    if(realtor){
        res.json(realtor)
    }
})

//@desc Update Realtor
//@route PUT /api/realtors/:id
//@access PRIVATE --admin/self
const updateRealtor = asyncHandler(async (req, res) =>{
    const realtor = await Realtor.findById(req.user._id)
    
    if(realtor){
        realtor.name = req.body.name || realtor.name
        realtor.about = req.body.about || realtor.about
        realtor.email = req.body.email || realtor.email
        realtor.phone = req.body.phone || realtor.phone
        isHighlighted = req.body.isHighlighted || realtor.isHighlighted

        const updateRealtor = await realtor.save();

        res.json(updateRealtor)
    } else {
        res.status(404)
        throw new Error(`Realtor not found`)
    }
})


//@desc Remove Realtor
//@route DELETE /api/realtors/:id
//@access PRIVATE --admin
const removeRealtor = asyncHandler(async(req, res) =>{
    const realtor = await Realtor.findById(req.params.id);

    if(realtor){
        await realtor.remove()
        res.json({ msg: `realtor is removed with id of ${req.params.id}`})
    } else {
        res.status(404)
        throw new Error(`Realtor with an id of ${req.params.id} is not found.`)
    }
})

export { 
    createRealtor, 
    updateRealtor, 
    removeRealtor, 
    getAllRealtors, 
    getSingleRealtor
}