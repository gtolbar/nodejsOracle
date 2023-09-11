const { getConnectionDataBase } = require("../config/dataDataBase.js");

async function executeSql(sql) {
    var dataBaseClient;
    try {

        dataBaseClient = await getConnectionDataBase();
        const result = await dataBaseClient.execute(sql)
        if (!result.rows) {
            return {};
        } else {
            return result.rows;
        }
    } catch (error) {
        console.log(`Error al ejecutar la setencia de sql: ${error}`);
        throw error;
    }finally {
        if (dataBaseClient) {
            await dataBaseClient.release();
        }
    }
}

module.exports = {executeSql};