const Joi = require ('@hapi/joi');

const validateUsers = Joi.object({
firstName: Joi.string().min(1).required(),
lastName: Joi.string().min(1).required(),
username: Joi.string().email().required(),
email: Joi.string().min(1).required(),
password: Joi.string().min(3).max(15).required(),

})

module.exports = {
    validateUsers
}