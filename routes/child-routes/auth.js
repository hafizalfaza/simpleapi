import express from 'express';
import {User} from '../../db/models/user';

const router = express.Router();

// CREATE

router.post('/register', (req, res) => {
    User.create({
        full_name: req.body.fullname,
        panggilan: req.body.panggilan,
        role: req.body.role,
        is_employee: req.body.is_employee
    }).then((user) => {
        res.json({user})
    }).catch((err) => {
        console.log(err)
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