const CAR_OFFER_DETAILS_ENDPOINT = _id => `/cars/${_id}/details`;
const EDIT_CAR_OFFER_ENDPOINT = _id => `/cars/${_id}/edit`;
const DELETE_CAR_OFFER_ENDPOINT = _id => `/cars/${_id}/delete`;

const carOfferEndpoints = {
    CREATE_CAR_OFFER_ENDPOINT: '/cars/create',
    ALL_CAR_OFFERS_ENDPOINT: '/cars/all',
    MY_CAR_OFFERS_ENDPOINT: '/cars/my',
    CAR_OFFER_DETAILS_ENDPOINT,
    EDIT_CAR_OFFER_ENDPOINT,
    DELETE_CAR_OFFER_ENDPOINT,
};

export default carOfferEndpoints;