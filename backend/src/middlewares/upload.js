const util = require("util");
const multer = require("multer");
const maxSize = 2 * 1024 * 1024;

const uploadFile = multer({
    dest: 'uploads/',
    limits: maxSize
})
    //Name of file property
    .single("avatar");

exports.uploadFileMiddleware = util.promisify(uploadFile);