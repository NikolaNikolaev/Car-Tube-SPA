import requester from '../../infrastructure/requester';
import verifyJWT from '../common/verifyJWT';
import carOfferEndpoints from '../api/carOfferEndpoints';


const getAll = () => requester(carOfferEndpoints.ALL_CAR_OFFERS_ENDPOINT, 'GET')

const getOne = _id => requester(carOfferEndpoints.CAR_OFFER_DETAILS_ENDPOINT(_id), 'GET')

const getMy = _id => requester(carOfferEndpoints.MY_CAR_OFFERS_ENDPOINT, 'POST', { _id })

const isSeller = seller => {
    const { email } = verifyJWT();
    return seller === email;
};

const carOfferRequester = {
    getAll,
    getOne,
    getMy,
    isSeller,
};
export default carOfferRequester;