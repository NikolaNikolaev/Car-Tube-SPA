const { isEmpty, isLength, equals } = require('validator');
const { empty, short } = require('../../common/validate');

const { differentPasswords } = require('../../notification/authMessages');

const validateInputData = ({ email, password, repeatPassword }) => {
    if (isEmpty(email)) throw empty('email');
    if (isEmpty(password)) throw empty('password');
    if (isEmpty(repeatPassword)) throw empty('repeatPassword');

    if (!equals(password, repeatPassword)) throw differentPasswords;

    if (!isLength(email, { min: 6, max: 15 })) throw short('email', 6, 15);
    if (!isLength(password, { min: 6, max: 15 })) throw short('password', 6, 15);
};

module.exports = validateInputData;