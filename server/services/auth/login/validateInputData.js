const { isEmpty, isLength } = require('validator');
const { empty, short } = require('../../common/validate');

const validateInputData = ({ email, password }) => {
    if (isEmpty(email)) throw empty('email');
    if (isEmpty(password)) throw empty('password');

    if (!isLength(email, { min: 6, max: 15 })) throw short('email', 6, 15);
    if (!isLength(password, { min: 6, max: 15 })) throw short('password', 6, 15);
};

module.exports = validateInputData;