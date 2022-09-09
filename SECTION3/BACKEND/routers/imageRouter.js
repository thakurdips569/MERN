const express = require('express');

const router=express.Router();

router.get('/image' , (req,res) => 
{
    res.send('response from image Router')
})

// exporting routers
module.exports = router;
