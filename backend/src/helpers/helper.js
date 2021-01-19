const responseHandler = (res, success, code = 400, message , data) => {
    res.status(code).json({
        success,
        code,
        message,
        data
    });
};

module.exports = {
    responseHandler
};