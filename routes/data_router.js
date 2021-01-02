const express = require('express');
const router = express.Router();
const data_service = require('../services/data_service');
const customError = require('../utilities/errorHandler');
const fileName = 'data_router';

router.get('/get_data_by_building_code', async (req,res) =>{
    try{
        const response = await data_service.get_data_by_building_code();
        res.send(response);
    }catch(e){
        const err = new customError(e, e.code, fileName, 'get_data_by_building_code'); 
        return err;
    }
})

router.get('/get_data_by_room_code', async (req,res) =>{
    try{
        const response = await data_service.get_data_by_room_code();
        res.send(response);
    }catch(e){
        const err = new customError(e, e.code, fileName, 'get_data_by_room_code'); 
        return err;
    }
})

router.get('/get_data_by_sensor_code', async (req,res) =>{
    try{
        const response = await data_service.get_data_by_sensor_code();
        res.send(response);
    }catch(e){
        const err = new customError(e, e.code, fileName, 'get_data_by_sensor_code'); 
        return err;
    }
})

module.exports = router;