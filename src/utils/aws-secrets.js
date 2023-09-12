let cacheSecrets = {};

async function getSecrets() {
    try {

        let keysOracle = {
            USER_ORACLE: "testuser",
            PASSWORD_ORACLE: "testpass",
            CONNECTION_STRING_ORACLE: "connectionOracle",
        }

        cacheSecrets.keysOracle = keysOracle;
        
        return cacheSecrets;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getSecrets,
}