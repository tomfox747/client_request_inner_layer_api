const buildingModel = require('../models/building')
const roomModel = require('../models/room')
const sensorModel = require('../models/sensor')
const {getError, generateReturnError} = require('../utilities/errorHandler');
const fileName = 'data_service';

const Get_building_info_by_building_id = async (buildingId) =>{
    try{
        let result = await buildingModel.findOne({Id: buildingId}).lean().exec();
        return result;
    }catch(e){
        return getError(e, e.code, fileName, 'get_building_info_by_building_id');
    }
}

const Get_rooms_by_building_id = async (buildingId) =>{
    try{
        let rooms = await roomModel.find({Building:buildingId}).lean().exec();
        return rooms
    }catch(e){
        return getError(e, e.code, fileName, 'get_rooms_by_building_id'); 
    }
}

const Get_sensors_by_building_id = async (buildingId) =>{
    try{
        let sensors = await sensorModel.find({Building:buildingId}).lean().exec();
        return sensors
    }catch(e){
        return getError(e, e.code, fileName, 'get_sensors_by_building_id'); 
    }
}

const Get_sensors_by_room_id = async (buildingId, roomId) =>{
    try{
        let sensors = await sensorModel.find({Building:buildingId, RoomId:roomId}).lean().exec()
        return sensors
    }catch(e){
        return getError(e,e.code, fileName, 'get_sensors_by_room_id')
    }
}

const Get_room = async (buildingId, roomId) =>{
    try{
        let room = await roomModel.findOne({Building:buildingId, RoomId:roomId}).lean().exec();
        return room
    }catch(e){
        return getError(e,e.code,fileName,'get_room')
    }
}

module.exports = {
    Get_building_info_by_building_id,
    Get_rooms_by_building_id,
    Get_sensors_by_building_id,
    Get_sensors_by_room_id,
    Get_room
}