const create = require('./create');
const edit = require('./edit');
const deleteOne = require('./deleteOne');
const requests = require('./requests');

const carOfferService = {
    create,
    edit,
    deleteOne,
    ...requests,
};

module.exports = carOfferService;