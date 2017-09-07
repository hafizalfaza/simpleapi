import express from 'express';
import {User} from '../../db/models/user';
import {registerUser, userLogin, changeUserPassword} from '../../db/controllers/user';
import crypto from 'crypto';
import {dbconfig} from './../../db/config';
import jwt from 'jsonwebtoken';
import passport from 'passport';

const router = express.Router();

// CREATE

router.post('/register', (req, res) => {

    const {username, full_name, password, email, role} = req.body;
    const queryData = {username, full_name, password, email, role}

    registerUser(queryData, (err, result) => {
        if(err){
            return res.status(500).json({message: err})
        }

        res.json({result});        
    })
})



// READ

router.post('/login', (req, res, next) => {

    const {queryData} = req.body
    
    userLogin(queryData, (err, result) => {

        if(err){
            return res.status(500).json({message: err})
        }

        if(crypto.createHash('md5').update(queryData.password).digest("hex") !== result.password){
            return res.status(401).json({message: "Invalid credentials"});
        }

        const token = jwt.sign({
            id: result.id
        }, dbconfig.jwtSecret);

        res.json({token, data: result});
    })
});


//UPDATE

router.put('/change-password', passport.authenticate('jwt', {session: false}), (req, res) => {
    
    const { id } = req.user.dataValues;
    const { password } = req.user.dataValues;
    const { oldPassword } = req.body.queryData;
    const newPassword = crypto.createHash('md5').update(req.body.queryData.newPassword).digest("hex");


    const queryData = {id, newPassword}

    if(password !== crypto.createHash('md5').update(oldPassword).digest("hex")){
        return res.status(401).json({message: 'Incorrect old password'})
    }

    changeUserPassword(queryData, (err, result) => {
        if(err){
            return res.status(500).json({message: 'Internal server error'})
        }

        res.json({result});
    })
})


//DELETE

export default router;