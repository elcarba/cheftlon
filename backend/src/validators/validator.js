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

        return responseHandler(
            res,
            false,
            400,
            "Some errors found",
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

exports.validateEditUser = [
    check("name").notEmpty().withMessage("It is mandatory to enter name"),
    check("password").if((value, { req }) => req.body.password && req.body.password !== '')
        .matches(validRegex)
        .withMessage("Password must be 8 characters and 1 capital letter"),
    validateResult
];

exports.validateLogin = [
    checkEmailAndPwd(),
    validateResult,
];

exports.validateChef = [
    check("name").notEmpty().withMessage("It is mandatory to enter name"),
    check("country").notEmpty().withMessage("It is mandatory to enter country"),
    validateResult
];

exports.validateChefToRate = [
    check("rate").isInt().withMessage("It is mandatory to enter valid number to rate")
        .isLength({ min: 0, max: 5 }).withMessage("Rate should be a number between 0 and 5"),
    validateResult
];