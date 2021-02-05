import mongoose from 'mongoose'

const realtorSchema = mongoose.Schema(
    {
        user:{
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            unique: true
        },
        name:{
            type: String,
            required: true
        },
        // Add Photo
        about:{
            type: String,
            required: true,
        },
        email:{
            type: String,
            required: true,
        },
        phone:{
            type: String,
            required: true,
        },
        isHighlighted:{
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
)

const Realtor = mongoose.model("Realtor", realtorSchema)

export default Realtor;