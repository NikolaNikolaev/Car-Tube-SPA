import { Link } from 'react-router-dom';
import SellerView from './All/SellerView';
import carOfferEndpoints from '../../services/api/carOfferEndpoints';

const CarOffer = ({ _id, title, brand, seller, fuel, year, price, imageUrl, isSeller }) => {
    return (
        <div className="listing">
            <p>{title}</p>
            <img src={imageUrl} alt={brand} />
            <h2>Brand: {brand}</h2>
            <div className="info">
                <div id="data-info">
                    <h3>Seller: {seller}</h3>
                    <h3>Fuel: {fuel}</h3>
                    <h3>Year: {year}</h3>
                    <h3>Price: {price} $</h3>
                </div>

                <div id="data-buttons">
                    <ul>
                        <li className="action">
                            <Link to={carOfferEndpoints.CAR_OFFER_DETAILS_ENDPOINT(_id)} className="button-carDetails">Details</Link>
                        </li>

                        {isSeller ? <SellerView _id={_id} /> : null}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CarOffer;