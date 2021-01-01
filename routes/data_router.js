const express = require('express');
const router = express.Router();
const data_service = require('../services/data_service');


router.get('/get_data_by_building_code', async (req,res) =>{
    const response = await data_service.get_data_by_building_code();
    res.send(response);
})

router.get('/get_data_by_room_code', async (req,res) =>{
    const response = await data_service.get_data_by_room_code();
    res.send(response);
})

router.get('/get_data_by_sensor_code', async (req,res) =>{
    const response = await data_service.get_data_by_sensor_code();
    res.send(response);
})

module.exports = router;