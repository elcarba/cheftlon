const { check, validationResult } = require('express-validator');
const { responseHandler } = require("../helpers/helper");
const validRegex = new RegExp("^(?=.*[A-Z])(?=.{8,})");

validateResult = (req, res, next) => {
    const errors = validationResult(req);
    const valError = {};

    if (!errors.isEmpty()){
        errors.array().forEach(err => {
            if(valError[err.param])
                return;

            valError[err.param] = err.msg;
        });

        responseHandler(
            res,
            false,
            400,
            "Some errors found:",
            valError
        );
    }

    next();
};

function checkEmailAndPwd(){
    return [
        check("email").exists().withMessage("It is mandatory to enter email")
            .isEmail().withMessage("The email must be in correct format as foo@bar.com"),
        check("password").exists().withMessage("It is mandatory to enter password")
            .matches(validRegex)
            .withMessage("Password must be 8 characters and 1 capital letter")
    ];
}

exports.validateUser = [
    check("name").notEmpty().withMessage("It is mandatory to enter name"),
    checkEmailAndPwd(),
    validateResult
];

exports.validateLogin = [
    checkEmailAndPwd(),
    validateResult,
];