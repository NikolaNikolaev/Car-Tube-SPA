import send from '../common/submitData/send';
import observer from '../../infrastructure/observer';

import carOfferMessages from '../notification/carOfferMessages';
import carOfferEndpoints from '../api/carOfferEndpoints';

const deleteOne = _id => {
    // Delete Car Offer
    send(carOfferEndpoints.DELETE_CAR_OFFER_ENDPOINT(_id), 'DELETE', { _id });
    // Show Notification
    let notification = { type: 'success', message: carOfferMessages.successfullyDeletedCarOffer };
    observer.trigger(observer.events.notifications, notification);
};

export default deleteOne;