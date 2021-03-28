import create from './create';
import edit from './edit';
import deleteOne from './deleteOne';

import carOfferRequester from './carOfferRequester';

const carOfferService = {
    create,
    edit,
    deleteOne,
    ...carOfferRequester,
};
export default carOfferService;