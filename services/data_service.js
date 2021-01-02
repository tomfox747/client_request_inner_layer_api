const customError = require('../utilities/errorHandler');
const fileName = 'data_service';

const Get_data_by_building_code = () =>{
    try{
        return 'showing data by building code'
    }catch(e){
        const err = new customError(e, e.code, fileName, 'get_data_by_building_code'); 
        return err;
    }
}

const Get_data_by_room_code = () =>{
    try{
        return 'showing data by room code'
    }catch(e){
        const err = new customError(e, e.code, fileName, 'get_data_by_room_code'); 
        return err;
    }
}

const Get_data_by_sensor_code = () =>{
    try{
        return 'showing data by sensor code'
    }catch(e){
        const err = new customError(e, e.code, fileName, 'get_data_by_sensor_code'); 
        return err;
    }
}

module.exports = {
    get_data_by_building_code : Get_data_by_building_code,
    get_data_by_room_code : Get_data_by_room_code,
    get_data_by_sensor_code : Get_data_by_sensor_code
}