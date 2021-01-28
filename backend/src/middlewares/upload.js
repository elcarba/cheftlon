const util = require("util");
const fs = require('fs');
const multer = require("multer");
const maxSize = 2 * 1024 * 1024;

//Unlink files
const unlinkAsync = util.promisify(fs.unlink);

const uploadFile = multer({
    dest: 'uploads/',
    limits: maxSize
})
    //Name of file property
    .single("avatar");

exports.uploadFileMiddleware = util.promisify(uploadFile);
exports.deleteFileMiddleware = async function(pathFile){
    return await unlinkAsync(pathFile)
};