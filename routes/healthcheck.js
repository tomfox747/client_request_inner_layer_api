const express = require('express');
const router = express.Router();

router.get('/',(req,res) =>{
    console.log('healthcheck hit');
    res.send('healthcheck successful');
})

module.exports = router;