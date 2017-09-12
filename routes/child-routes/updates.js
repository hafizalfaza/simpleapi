import express from 'express';
import { getAllUpdates } from '../../db/controllers/update';

const router = express.Router();


router.get('/sticky', (req, res) => {
    
    getAllUpdates((err, result) => {
        if(err){
            return res.json(err)
        }

        res.json(result)
        
    })

})

export default router;