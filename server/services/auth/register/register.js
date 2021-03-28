const bcrypt = require('bcrypt');
const { getDB } = require('../../mongodb/mongodb');
const { COLL_USERS } = require('../../../config/mongodb');
const { SALT_ROUNDS } = require('../../../config/config');

const validateInputData = require('./validateInputData');
const { alreadyExistingUser } = require('../../notification/authMessages');

const register = async ({ email, password, repeatPassword }) => {
    try {
        const users = getDB().collection(COLL_USERS);
        // Validate Input Data
        validateInputData({ email, password, repeatPassword });
        // Does User Already Exist
        const user = await users.findOne({ email });
        if (user) { throw alreadyExistingUser };
        // Save User
        const hashPassword = await bcrypt.hash(password, SALT_ROUNDS);
        return users.insertOne({ email, password: hashPassword });

    } catch (error) { throw error };
};

module.exports = register;