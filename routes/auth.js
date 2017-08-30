import express from 'express';

const router = express.Router();

router.post('/register', (req, res, next) => {
   res.json({message: 'hey '+req.body.fullName+', you are successfully registered!'});
})

router.post('/login', (req, res, next) => {
    res.json({message: 'hey '+req.body.fullName+', you are successfully logged in!'});
});

router.put('/change-password', (req, res, next) => {
    res.json({message: 'hey '+req.body.fullName+', your password changed to: '+req.body.newPassword})
})

export default router;