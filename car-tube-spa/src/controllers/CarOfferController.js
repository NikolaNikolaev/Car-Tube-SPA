import { Route, Switch } from 'react-router-dom';
import '../style/car-listings.css';
import '../style/listing-details.css';
import '../style/my-listings.css';

import carOfferEndpoints from '../services/api/carOfferEndpoints';
import CreateCarOfferForm from '../components/car-offer/Create/CreateCarOfferForm';
import AllCarOffers from '../components/car-offer/All/AllCarOffers';
import EditCarOfferForm from '../components/car-offer/Edit/EditCarOfferForm';
import DeleteCarOffer from '../components/car-offer/Delete/DeleteCarOffer';
import CarOfferDetails from '../components/car-offer/Details/CarOfferDetails';
import MyCarOffers from '../components/car-offer/My/MyCarOffers';

const CarOfferControleer = () => {
    const { CREATE_CAR_OFFER_ENDPOINT, ALL_CAR_OFFERS_ENDPOINT, MY_CAR_OFFERS_ENDPOINT } = carOfferEndpoints;

    return (
        <Switch>
            <Route exact path={ALL_CAR_OFFERS_ENDPOINT} component={AllCarOffers} />
            <Route exact path={MY_CAR_OFFERS_ENDPOINT} component={MyCarOffers} />
            <Route exact path={CREATE_CAR_OFFER_ENDPOINT} component={CreateCarOfferForm} />
            
            <Route exact path={`/cars/:carId/details`} component={CarOfferDetails} />
            <Route exact path={`/cars/:carId/edit`} component={EditCarOfferForm} />
            <Route exact path={`/cars/:carId/delete`} component={DeleteCarOffer} />
        </Switch>
    );
};

export default CarOfferControleer;