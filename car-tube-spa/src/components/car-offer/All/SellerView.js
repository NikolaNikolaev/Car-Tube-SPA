import { Link } from 'react-router-dom';
import carOfferEndpoints from '../../../services/api/carOfferEndpoints';

const SellerView = ({ _id }) => (
    <div>
        <li className="action">
            <Link to={carOfferEndpoints.EDIT_CAR_OFFER_ENDPOINT(_id)} className="button-carDetails">Edit</Link>
        </li>
        <li className="action">
            <Link to={carOfferEndpoints.DELETE_CAR_OFFER_ENDPOINT(_id)} className="button-carDetails">Delete</Link>
        </li>
    </div>
);

export default SellerView;