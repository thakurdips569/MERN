const express = require('express');

const router=express.Router();

router.get('/video' , (req,res) => 
{
    res.send('response from video Router')
})

// exporting routers
module.exports = router;
