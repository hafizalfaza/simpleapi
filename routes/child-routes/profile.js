import express from 'express';
import { getProfileById, updateProfileData } from '../../db/controllers/profile';
import passport from 'passport';

const router = express.Router();

// READ

// Get profile data by id

router.get('/:id', (req, res) => {
    
    const userId = req.params.id;

    getProfileById(userId, (err, result) => {
        if(err){
            return res.status(500).json({message: 'internal server error'})
        }

        if(result.message){
            return res.status(404).json(result);
        }

        res.json(result);
    })

})


// UPDATE

// Update user profile

router.put('/update', passport.authenticate('jwt', {session: false}), (req, res) => {
    
    const userData = req.user.dataValues;

    const queryData = { ...req.body };

    if(queryData.password) {
        delete queryData.password
    }

    if(queryData.email){
        delete queryData.email
    }

    if(queryData.id !== userData.id){
        return res.status(401).json({message: 'you are unauthorized to update this profile'})
    }

    updateProfileData(queryData, (err, result) => {
        if(err){
            return res.status(500).json({message: 'internal server error'})
        }

        res.json({message: 'your profile was successfully updated'});

    })
    

})


export default router;