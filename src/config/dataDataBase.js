var oracledb = require('oracledb');
startDataBaseClient()

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

const secretAWS = require('../utils/aws-secrets.js');

async function getConnectionDataBase() {
  
  let connection;

  try {
    
    const secretsData = await secretAWS.getSecrets();

    const connection = await oracledb.getConnection({
        user : secretsData.keysOracle.USER_ORACLE,
        password : secretsData.keysOracle.PASSWORD_ORACLE,
        connectionString : secretsData.keysOracle.CONNECTION_STRING_ORACLE
      })

    return connection;

  } catch (error) {
    console.log(`Error al conectar con la base de datos: ${error}`);
    throw error;
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (error) {
        console.log(`Error al cerrar la conexión con la base de datos: ${error}`);
        throw error;
      }
    }
  }
}

async function startDataBaseClient() {
  try {
    oracledb.initOracleClient();
  } catch (err) {
    console.log(`Error al inicializar el client de la base de datos: ${err}`);
    throw err;
  }
}


module.exports = {
  getConnectionDataBase, startDataBaseClient 
};