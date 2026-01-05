import express from 'express';

const router = express.Router();

router.get('/' , (req, res) =>{
    let obj = {
        name: "Aditya Patel",
        number: 9565368472
    }
    res.json(obj);
})

export default router;