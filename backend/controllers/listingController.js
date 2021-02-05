import asyncHandler from 'express-async-handler';
import Listing from '../models/listingsModel.js';


//@desc Get All Listings
//@ GET /api/listings
//@access PUBLIC
const getAllListings = asyncHandler( async(req, res) => {
    const listings = await Listing.find();
    res.json(listings)
})

//@desc Get Single Listing
//@GET /api/listings/:id
//@access PUBLIC
const getSingleListing = asyncHandler( async( req, res) =>{
    const id = req.params.id;
    const listing = await Listing.findById(id);
    if(!listing){
        res.status(404)
        throw new Error(`Listing not found with an id of ${req.params.id}`)
    } else{
        res.json(listing)
    }
})


//@desc Create New Listing
//@ POST /api/listings
//@access PRIVATE --Staff
const createNewListing = asyncHandler(async (req, res) => {
    const listing = new Listing({
        user: req.user._id,
        realtor: req.user._id,
        title: 'New Listing',
        address: '123 anywhere street',
        city: 'anywhere',
        state: 'CA',
        zip: '95000',
        desc: 'New Listings please update'
    })

    const createdListing = await listing.save()
    res.status(201).json(createdListing)
})

//@desc Update Listing
//@ PUT /api/listings/:id
//@ access PRIVATE --Staff
const updateListing = asyncHandler(async(req,res) =>{
    const{
        realtor,
        title,
        address,
        city,
        state,
        zip,
        desc,
        price,
        bedrooms,
        bathrooms,
        garage,
        parking,
        sqft,
        lotSize,
        isPublished,
    } = req.body

    const listing = await Listing.findById(req.params.id)

    if(listing){
       listing.realtor = realtor
       listing.title = title
       listing.address = address
       listing.city = city
       listing.state = state
       listing.zip = zip
       listing.desc = desc
       listing.price = price
       listing.bedrooms = bedrooms
       listing.bathrooms = bathrooms
       listing.garage = garage
       listing.parking = parking
       listing.sqft = sqft
       listing.lotSize = lotSize
       listing.isPublished = isPublished
       const updatedListing = await listing.save()
       res.json(updatedListing)
    } else {
        res.status(404)
        throw new Error(`Listing not found with an id of ${req.params.id}.`)
    }
});

//@desc Remove Listing
//@ DELETE /api/listings/:id
//@ access PRIVATE --Admin
const removeListing = asyncHandler(async(req,res)=>{
    const listing = await Listing.findById(req.params.id);
    if(listing){
        await listing.remove()
        res.json({ message: `Removed Listing with id of ${req.params.id}`})
    } else {
        res.status(404)
        throw new Error(`Listing with id of ${req.params.id}`)
    }
})

export { removeListing, updateListing, createNewListing, getAllListings, getSingleListing }