import { Link } from 'react-router-dom';
import carOfferEndpoints from '../../../services/api/carOfferEndpoints';

const SellerView = ({ _id }) => {
    let { EDIT_CAR_OFFER_ENDPOINT, DELETE_CAR_OFFER_ENDPOINT } = carOfferEndpoints;

    return (
        <div className="listings-buttons">
            <Link to={EDIT_CAR_OFFER_ENDPOINT(_id)} className="button-list">Edit</Link>
            <Link to={DELETE_CAR_OFFER_ENDPOINT(_id)} className="button-list">Delete</Link>
        </div>
    );
};

export default SellerView;