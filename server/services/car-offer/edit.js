const { ObjectId } = require('mongodb');
const { getDB } = require('../mongodb/mongodb');
const { COLL_CAR_OFFERS } = require('../../config/mongodb');

const validateInputData = require('./validateInputData');

const edit = (form, carId) => {
    try {
        // Validate Input Data
        let error = validateInputData(form);
        if (error) { throw error };
        // Edit Car Offer
        const filter = { _id: ObjectId(carId) };
        const update = { $set: { ...form } };
        return getDB().collection(COLL_CAR_OFFERS).updateOne(filter, update);

    } catch (error) { throw error };
};

module.exports = edit;