import { isLength, isURL } from 'validator';
import { short } from '../../services/common/validateInputData';
import carOfferMessages from '../../services/notification/carOfferMessages';

const defaultState = {
    title: '',
    description: '',
    brand: '',
    model: '',
    year: '',
    imageUrl: '',
    fuel: '',
    price: '',
};

const validate = ({ title, description, brand, model, year, imageUrl, fuel, price }) => {
    let { invalidPrice, invalidUrl } = carOfferMessages;

    if (!isLength(title, { min: 6, max: 15 })) return short('title', 6, 15);
    if (!isLength(description, { min: 10, max: 30 })) return short('description', 10, 30);
    if (!isLength(brand, { min: 3, max: 10 })) return short('brand', 3, 10);
    if (!isLength(model, { min: 3, max: 10 })) return short('model', 3, 10);
    if (!isLength(year.toString(), { min: 4, max: 4 })) return short('year', 4, 4);
    if (!isLength(fuel, { min: 3, max: 8 })) return short('fuel', 3, 8);

    if (!isURL(imageUrl)) return invalidUrl;
    if (price <= 0) return invalidPrice;
};

const carOfferModel = {
    defaultState,
    validate,
};

export default carOfferModel;