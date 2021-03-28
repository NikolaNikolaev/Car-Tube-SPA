const { ObjectId } = require('mongodb');
const { getDB } = require('../mongodb/mongodb');
const { COLL_CAR_OFFERS } = require('../../config/mongodb');

const deleteOne = ({ _id }) => {
    const filter = { _id: ObjectId(_id) };
    return getDB().collection(COLL_CAR_OFFERS).deleteOne(filter);
};
    
module.exports = deleteOne;