import express from 'express';
import User from '../Models/Users.js';

const router = express.Router();

//Create a user using: POST "/api/auth"

router.post('/' , (req, res) =>{
    const user = User(req.body);
    user.save();
    // res.send(req.body);
})

export default router;