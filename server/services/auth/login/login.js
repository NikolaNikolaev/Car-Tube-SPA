const bcrypt = require('bcrypt');
const { getDB } = require('../../mongodb/mongodb');
const { COLL_USERS } = require('../../../config/mongodb');

const validateInputData = require('./validateInputData');
const { nonExistingUser, invalidPassword } = require('../../notification/authMessages');

const login = async ({ email, password }) => {
    try {
        const users = getDB().collection(COLL_USERS);
        // Validate Input Data
        validateInputData({ email, password });
        // Validate User's Email
        const user = await users.findOne({ email });
        if (!user) { throw nonExistingUser };
        // Validate Password
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) { throw invalidPassword };
        // Logged In
        return user;
    } catch (error) { throw error };
};

module.exports = login;