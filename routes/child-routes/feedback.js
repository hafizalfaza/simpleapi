import express from 'express';
import { getFeedback, submitFeedback, updateFeedback } from '../../db/controllers/feedback';
import passport from 'passport';

const router = express.Router();

router.get('', (req, res) => {

    getFeedback((err, result) => {
        if(err){
            return res.status(500).json({msg: err})
        }

        res.json(result)
    })

})


// CREATE

router.post('/submit', passport.authenticate('jwt', {session: false}), (req, res) => {
    
    const userData = req.user.dataValues;
    const { queryData } = req.body;

    queryData.user_id = userData.id;
    queryData.nama = userData.full_name;
    queryData.nik = userData.nik

    submitFeedback(queryData, (err, result) => {
        if(err){
            return res.status(500).json({message: err})
        }

        res.json(result);

    })

})


// UPDATE

router.put('/update', passport.authenticate('jwt', {session: false}), (req, res) => {

    const userData = req.user.dataValues;

    const { queryData } = req.body;

    if(queryData.user_id !== userData.id){
        return res.status(401).json({message: 'you are unauthorized to edit this feedback'})
    }

    updateFeedback(queryData, (err, result) => {
        if(err){
            return res.status(500).json({message: 'internal server error'})
        }

        res.json({message: 'your feedback was successfully updated'})
    })

})

export default router;