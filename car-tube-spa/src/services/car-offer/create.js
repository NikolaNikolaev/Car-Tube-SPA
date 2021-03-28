import carOfferEndpoints from '../api/carOfferEndpoints';
import homeEndpoints from '../api/homeEndpoints';
import carOfferMessages from '../notification/carOfferMessages';

import send from '../common/submitData/send';
import success from '../common/submitData/success';
import fail from '../common/submitData/fail';

import verifyJWT from '../common/verifyJWT';

const create = {
    send: form => {
        let { _id, email } = verifyJWT();
        let carOfferData = { form, userId: _id, seller: email };
        return send(carOfferEndpoints.CREATE_CAR_OFFER_ENDPOINT, 'POST', carOfferData);
    },
    success: function () {
        let notification = { type: 'success', message: carOfferMessages.successfullyCreatedCarOffer };
        return success.call(this, notification, homeEndpoints.HOME_ENDPOINT);
    },
    fail: error => fail(error)
};

export default create;