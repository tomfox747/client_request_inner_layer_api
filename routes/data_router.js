const express = require('express');
const router = express.Router();
const data_service = require('../services/data_service');
const {getError, generateReturnError} = require('../utilities/errorHandler');
const fileName = 'data_router';

router.get('/get_data_by_building_code', async (req,res) =>{
    try{
        const response = await data_service.get_data_by_building_code();
        res.send(response);
    }catch(e){
        const err = getError(e,e.code,fileName,'gat_data_by_building_code');
        const returnError = generateReturnError(err);
        res.send(returnError);
    }
})

router.get('/get_data_by_room_code', async (req,res) =>{
    try{
        const response = await data_service.get_data_by_room_code();
        res.send(response);
    }catch(e){
        const err = getError(e, e.code, fileName, 'get_data_by_room_code'); 
        const returnError = generateReturnError(err);
        res.send(returnError);
    }
})

router.get('/get_data_by_sensor_code', async (req,res) =>{
    try{
        const response = await data_service.get_data_by_sensor_code();
        res.send(response);
    }catch(e){
        const err = getError(e, e.code, fileName, 'get_data_by_sensor_code');
        const returnError = generateReturnError(err);
        res.send(returnError);
    }
})

module.exports = router;