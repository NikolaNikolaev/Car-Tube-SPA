import { Link } from 'react-router-dom';

import verifyJWT from '../../../services/common/verifyJWT';
import authEndpoints from '../../../services/api/authEndpoints';
import carOfferEndpoints from '../../../services/api/carOfferEndpoints';

const AuthView = () => {
    let { email } = verifyJWT();
    let { CREATE_CAR_OFFER_ENDPOINT, ALL_CAR_OFFERS_ENDPOINT, MY_CAR_OFFERS_ENDPOINT } = carOfferEndpoints;
    let { LOGOUT_ENDPOINT } = authEndpoints;

    return (
        <div>
            <Link to={ALL_CAR_OFFERS_ENDPOINT}>All Cars</Link>
            <Link to={MY_CAR_OFFERS_ENDPOINT}>My Cars</Link>
            <Link to={CREATE_CAR_OFFER_ENDPOINT}>Create Car Offer</Link>
            <div id="profile">
                <Link>Welcome, {email} </Link>
                <Link to={LOGOUT_ENDPOINT} >Logout</Link>
            </div>
        </div>
    );
};

export default AuthView;