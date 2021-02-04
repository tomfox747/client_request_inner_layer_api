const {getError, generateReturnError} = require('../utilities/errorHandler');
const fileName = 'data_service';

const Get_data_by_building_code = () =>{
    try{
        return 'showing data by building code'
    }catch(e){
        return getError(e, e.code, fileName, 'get_data_by_building_code');
    }
}

const Get_data_by_room_code = () =>{
    try{
        return 'showing data by room code'
    }catch(e){
        return getError(e, e.code, fileName, 'get_data_by_room_code'); 
    }
}

const Get_data_by_sensor_code = () =>{
    try{
        return 'showing data by sensor code'
    }catch(e){
        return getError(e, e.code, fileName, 'get_data_by_sensor_code'); 
    }
}

module.exports = {
    get_data_by_building_code : Get_data_by_building_code,
    get_data_by_room_code : Get_data_by_room_code,
    get_data_by_sensor_code : Get_data_by_sensor_code
}