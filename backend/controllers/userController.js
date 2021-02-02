import asyncHandler from 'express-async-handler';
import generateToken from "../utils/generateToken.js";
import User from "../models/userModel.js";


//@desc Login User and get Token
//@ POST /api/users/login
//@access PUBLIC
const loginUser = asyncHandler(async (req, res) =>{
    const { email, password } = req.body;
    const user = await User.findOne({ email })
    if(user.isActive){
        if(user && (await user.matchPassword(password))){
            await res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user._id),
            })
        } else {
            res.status(401)
            throw new Error('Invalid Email or Password');
        }
    } else {
        res.status(403)
        throw new Error('Account is not Active please contact admin.')
    }
})

//@desc Register a User
//@route /api/users/register
//@access PUBLIC
const registerUser = asyncHandler(async (req, res) =>{
    const { name, email, password } = req.body;
    const userExists = await User.findOne({ email })
    if(userExists){
        res.status(400)
        throw new Error(`User Already Exists`)
    }
    const user = await User.create({ name, email, password })
    if(user){
        await res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isStaff: user.isStaff,
            isRealtor: user.isRealtor,
            isActive: user.isActive,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error(`Invalid user Data`)
    }
})

//@desc Profile View of user
//@route GET /api/users/profile
//@access PRIVATE
const viewProfile = asyncHandler( async(req, res) => {
    const user = await User.findById(req.user._id)
    if(user){
        await res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
        })
    } else {
        res.status(404)
        throw new Error(`User not found`)
    }
})

//@desc Update User Profile
//@route PUT /api/users/profile
//@access PRIVATE
const updateUser = asyncHandler( async(req, res)=>{
    const user = await User.findById(req.user._id);
    if(user){
        user.name = req.body.name || user.name
        user.email = req.body.email || user.email
        if(req.body.password){
            user.password = req.body.password
        }
        const updatedUser = await user.save()
        await res.json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            token: generateToken(updatedUser._id),
        })
    } else {
        res.status(404)
        throw new Error('User Not Found')
    }
})

//@desc View All User by Role
//@route GET /api/users/:role
//@access PRIVATE-ADMIN
const viewAllUserAdmin = asyncHandler( async(req, res)=>{
    const role = req.params.role.toString();
    switch(role){
        case 'users':
            const users = await User.find({
                isAdmin: false,
                isStaff: false,
                isRealtor: false,
                isActive: true
            })
            return (res.json(users));
        case 'all':
            const all = await User.find({ isActive: true })
            return res.json(all)
        case 'staff':
            const staff = await User.find({
                isAdmin: false,
                isStaff: true,
                isRealtor: false,
                isActive: true
            })
            return (res.json(staff));
        case 'realtor':
            const realtor = await User.find({
                isAdmin: false,
                isStaff: true,
                isRealtor: true,
                isActive: true
            })
            return (res.json(realtor))
        case 'admin':
            const admin = await User.find({
                isAdmin: true,
                isStaff: true,
                isActive: true,
            })
            return (res.json(admin))
        case 'notActive':
            const notActiveUser = await User.find({ isActive: false})
            return (res.json(notActiveUser))
        default:
            throw new Error(`Invalid Request`)
    }
})

//@desc Delete user
//@route DELETE /api/user/:id/remove
//@access PRIVATE-ADMIN
const removeUserAdmin = asyncHandler(async(req,res)=>{
    const user = await User.findById(req.params.id);
    if(user){
        await user.remove()
        await res.json({msg: 'User was removed'})
    } else {
        res.status(404)
        throw new Error(`User not found with id of ${req.params.id}`)
    }
})


//@desc Get user by ID
//@route GET /api/user/:id
//@access PRIVATE-ADMIN
const viewUserAdmin = asyncHandler(async(req, res)=>{
    const user = await User.findById(req.params.id);
    if(user){
        await res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            isStaff: user.isStaff,
            isRealtor: user.isRealtor,
            isActive: user.isActive
        })
    } else {
        res.status(404)
        throw new Error(`User with id of ${req.params.id} not found`)
    }
})

//@desc Update User
//@route PUT /api/user/:id/
//@access PRIVATE-ADMIN
const updateUserAdmin = asyncHandler(async(req,res)=>{
    const user = await User.findById(req.params.id);
    if(user){
        user.isAdmin = req.body.isAdmin || user.isAdmin
        user.isStaff = req.body.isStaff || user.isStaff
        user.isRealtor = req.body.isRealtor || user.isRealtor
        user.isActive = req.body.isActive || user.isActive

        const updateUser = await user.save()
        await res.json({
            _id: updateUser._id,
            name: updateUser.name,
            email: updateUser.email,
            isAdmin: updateUser.isAdmin,
            isStaff: updateUser.isStaff,
            isRealtor: updateUser.isRealtor,
            isActive: updateUser.isActive
        })
    } else {
        res.status(404)
        throw new Error('User not found')
    }
})

//@desc Admin make new user
//@route POST /api/user/create
//@access PRIVATE-ADMIN
const newUserAdmin = asyncHandler( async (req, res)=>{
    const { name, email, isAdmin, isStaff, isRealtor } = req.body;
    const userExists = await User.findOne({ email })
    if(userExists){
        res.status(400)
        throw new Error('User Already Exists')
    }
    const tempPassword = 'temp123password'
    const user = await User.create({ name, email, isAdmin, isStaff, isRealtor, tempPassword })
    if(user){
        await res.status(200).json({
            msg: `User ${user.name} was created with email of ${email} password is the temp password`
        })
    } else {
        res.status(400)
        throw new Error('Invalid user Data')
    }
})

export {
    newUserAdmin,
    updateUser,
    updateUserAdmin,
    viewUserAdmin,
    viewAllUserAdmin,
    viewProfile,
    registerUser,
    removeUserAdmin,
    loginUser,
}