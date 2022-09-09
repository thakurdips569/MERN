const express = require('express');
const Model = require('../models/userModel');

const router = express.Router();

router.post('/add' , (req,res) => 
{
    console.log(req.body);
    //ADD oprtion
    new Model(req.body).save()     //promise
    .then((result) => {
        console.log(result);
        res.json(result);

    }).catch((err) => {
        console.log(err);
        res.json(err)
    });
})

router.get('/getall',(req,res) => {
    Model.find()
    .then((result) => {
    console.log(result);    
    res.json(result);
    })
    .catch((err) => {
        console.log(err);    
        res.json(err);
    });
})
 
//    :  colon denotes url parameters 
router.get('/getbyusername/:username', (req, res) =>
{
    console.log(req.params.username);
    Model.find({username : req.params.username})
    .then((result) => {
        console.log(result);    
        res.json(result);
        })
        .catch((err) => {
            console.log(err);    
            res.json(err);
        });

})

router.delete('/delete/:id',(req,res) =>{

    Model.findOneAndDelete(req.params.id)
    .then((result) => {
        console.log(result);    
        res.json(result);
        })
        .catch((err) => {
            console.log(err);    
            res.json(err);
        });
})

// exporting routers
module.exports = router;