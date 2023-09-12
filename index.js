'use strict';

const {executeSql} = require("./src/utils/dataBase.js");
const { responseMessage } = require("./src/config/response");

module.exports.handler = async () => {
    try{
        let response;
        response = await executeDataBaseSQL("");
        return response;
    }catch (error) {
        console.log(`Error al ejecutar la lambda: ${error}`);
        return responseMessage(500, error)
    }
  };

async function executeDataBaseSQL(sql) {
    try {
        const dataSql = await executeSql(sql);
        if (!dataSql) {
        return {};
        }
        return dataSql;
    } catch (error) {
        console.log(`Error al ejecutar el sql de oracle: ${error}` + `SQL: ` +sql);
        throw error;
    }
}
  
module.exports.executeDataBaseSQL = executeDataBaseSQL;