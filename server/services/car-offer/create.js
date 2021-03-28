const validateInputData = require('./validateInputData');
const { getDB } = require('../mongodb/mongodb');
const { COLL_CAR_OFFERS, COLL_USERS } = require('../../config/mongodb');
const { ObjectId } = require('mongodb');

const create = async ({ form, userId, seller }) => {
    try {
        // Validate Input Data
        let error = validateInputData(form);
        if (error) { throw error };
        // Save Car Offer
        const userData = {
            year: parseInt(form.year),
            price: parseInt(form.price),
            user_id: ObjectId(userId),
            seller
        };
        Object.assign(form, userData);

        const carOffers = getDB().collection(COLL_CAR_OFFERS);
        const result = await carOffers.insertOne(form);

        // Add Car Offer's Id to User's car_offers property
        const users = getDB().collection(COLL_USERS);
        const carOfferId = result.insertedId;

        const filter = { _id: ObjectId(userId) };
        const update = { $addToSet: { car_offers: ObjectId(carOfferId) } };
        return users.updateOne(filter, update);

    } catch (error) { throw error };
};

module.exports = create;