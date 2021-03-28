const { getDB } = require('../../services/mongodb/mongodb');
const { COLL_CAR_OFFERS, COLL_USERS } = require('../../config/mongodb');
const { ObjectId } = require('bson');

const getAll = () => getDB().collection(COLL_CAR_OFFERS).find().toArray()

const getOne = carId => getDB().collection(COLL_CAR_OFFERS).findOne({ _id: ObjectId(carId) });

const getMy = ({ _id }) => {
    const pipeline = [
        {
            $graphLookup: {
                from: COLL_USERS,
                startWith: "$_id",
                connectFromField: "car_offers",
                connectToField: "car_offers",
                as: "user",
                maxDepth: 0,
                restrictSearchWithMatch: { _id: ObjectId(_id) }
            }
        },
        { $match: { user: { $exists: true, $ne: [] } } },
        { $unset: "user" }
    ];

    return getDB().collection(COLL_CAR_OFFERS).aggregate(pipeline).toArray();
}

const requests = {
    getAll,
    getOne,
    getMy,
};
module.exports = requests;