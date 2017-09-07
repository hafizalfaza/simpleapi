import express from 'express';
import {User} from '../../db/models/user';
import {registerUser} from '../../db/controllers/user';

const router = express.Router();

// CREATE

router.post('/register', (req, res) => {

    const {username, full_name, password, role} = req.body;
    const queryData = {username, full_name, password, role}

    registerUser(queryData, (err, result) => {
        if(err){
            return res.status(500).json({message: err})
        }

        res.json({result});        
    })
})



// READ

router.post('/login', (req, res, next) => {
    res.json({message: 'hey '+req.body.fullName+', you are successfully logged in!'});
});


//UPDATE

router.put('/change-password', (req, res, next) => {
    res.json({message: 'hey '+req.body.fullName+', your password changed to: '+req.body.newPassword})
})


//DELETE

export default router;