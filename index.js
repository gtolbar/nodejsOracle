const {executeSql} = require("./src/utils/dataBase.js");

exports.handler = async (event) => {
    let response;
    response = await executeDataBaseSQL("");
    return response;
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