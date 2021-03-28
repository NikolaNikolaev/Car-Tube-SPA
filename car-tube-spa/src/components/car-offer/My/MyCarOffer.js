import { Link } from 'react-router-dom';

import carOfferEndpoints from '../../../services/api/carOfferEndpoints';

const MyCarOffer = ({ _id, title, description, brand, model, year, imageUrl, fuel, price, seller }) => {
    const { CAR_OFFER_DETAILS_ENDPOINT, EDIT_CAR_OFFER_ENDPOINT, DELETE_CAR_OFFER_ENDPOINT } = carOfferEndpoints;

    return (
        <div className="my-listing">
            <p id="listing-title">{title}</p>
            <img src={imageUrl} alt={brand} />
            <div className="listing-props">
                <h2>Brand: {brand}</h2>
                <h3>Model: {model}</h3>
                <h3>Year: {year}</h3>
                <h3>Price: {price}$</h3>
            </div>

            <div className="my-listing-buttons">
                <Link to={CAR_OFFER_DETAILS_ENDPOINT(_id)} className="my-button-list">Details</Link>
                <Link to={EDIT_CAR_OFFER_ENDPOINT(_id)} className="my-button-list">Edit</Link>
                <Link to={DELETE_CAR_OFFER_ENDPOINT(_id)} className="my-button-list">Delete</Link>
            </div>
        </div>
    )
};

export default MyCarOffer;