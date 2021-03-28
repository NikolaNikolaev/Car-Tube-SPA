import carOfferEndpoints from '../api/carOfferEndpoints';
import carOfferMessages from '../notification/carOfferMessages';

import send from '../common/submitData/send';
import success from '../common/submitData/success';
import fail from '../common/submitData/fail';

import homeEndpoints from '../api/homeEndpoints';

const edit = {
    send: (form) => {
        let { title, description, brand, model, year, imageUrl, fuel, price } = form;
        return send(carOfferEndpoints.EDIT_CAR_OFFER_ENDPOINT(form._id), 'PUT', { title, description, brand, model, year, imageUrl, fuel, price });
    },
    success: function () {
        let notification = { type: 'success', message: carOfferMessages.successfullyEditedCarOffer };
        return success.call(this, notification, homeEndpoints.HOME_ENDPOINT);
    },
    fail: error => fail(error)
};

export default edit;