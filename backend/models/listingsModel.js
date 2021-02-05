import mongoose from 'mongoose';

const listingSchema = mongoose.Schema(
    {
        user:{
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        realtor:{
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        title:{
            type: String,
            required: true,
        },
        address:{
            type: String,
            required: true
        },
        city:{
            type: String,
            required: true,
        },
        state:{
            type: String,
            required: true,
            maxLength: [2, 'Please enter State abbreviation']
        },
        zip:{
            type: Number,
            required: true
        },
        desc:{
            type: String,
            required: true
        },
        price:{
            type: Number,
            required: true,
            default: 0
        },
        bedrooms:{
            type: Number,
            default: 0
        },
        bathrooms:{
            type: Number,
            required: true,
            default: 0
        },
        garage:{
            type: Boolean,
            required: true,
            default: false,
        }, 
        parking:{
            type: Number,
            required: true,
            default: 0
        }, 
        sqft:{
            type: Number,
            required: true,
            default: 0
        },
        lotSize:{
            type: Number,
            required: true,
            default: 0
        },
        isPublished:{
            type: Boolean,
            required: true,
            default: false
        },
        // Add Phots
    },
    {
        timestamps: true
    }
)

const Listing = mongoose.model('Listing', listingSchema)

export default Listing