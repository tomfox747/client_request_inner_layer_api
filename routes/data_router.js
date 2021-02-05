const express = require('express');
const router = express.Router();
const data_service = require('../services/data_service');
const {getError, generateReturnError} = require('../utilities/errorHandler');
const fileName = 'data_router';

router.get('/get_building_info_by_building_id', async (req,res) =>{
    try{
        let buildingId = req.query.buildingId
        const response = await data_service.Get_building_info_by_building_id(buildingId);
        res.send(response);
    }catch(e){
        const err = getError(e,e.code,fileName,'get_building_info_by_building_id');
        const returnError = generateReturnError(err);
        res.send(returnError);
    }
})

router.get('/get_rooms_by_building_id', async (req,res) =>{
    try{
        let buildingId = req.query.buildingId
        const response = await data_service.Get_rooms_by_building_id(buildingId);
        res.send(response);
    }catch(e){
        const err = getError(e, e.code, fileName, 'get_rooms_by_building_id'); 
        const returnError = generateReturnError(err);
        res.send(returnError);
    }
})

router.get('/get_sensors_by_building_id', async (req,res) =>{
    try{
        let buildingId = req.query.buildingId
        const response = await data_service.Get_sensors_by_building_id(buildingId);
        res.send(response);
    }catch(e){
        const err = getError(e, e.code, fileName, 'get_sensors_by_building_id');
        const returnError = generateReturnError(err);
        res.send(returnError);
    }
})

router.get('/get_room', async (req,res) =>{
    try{
        let buildingId = req.query.buildingId
        let roomId = req.query.roomId
        const response = await data_service.Get_room(buildingId, roomId)
        res.send(response)
    }catch(e){
        const err = getError(e, e.code, fileName, 'get_room');
        const returnError = generateReturnError(err);
        res.send(returnError);
    }
})

module.exports = router;