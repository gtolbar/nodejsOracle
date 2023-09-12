function responseMessage(statusCode, message) {
    return {
        statusCode: statusCode,
        body: JSON.stringify(
            {
                message: message
            },
            null,
            2
        )
    };
}


module.exports = {
    responseMessage
};