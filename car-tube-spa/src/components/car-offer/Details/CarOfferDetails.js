import React, { Component } from 'react';

import SellerView from './SellerView';
import carOfferService from '../../../services/car-offer/carOfferService';


class CarOfferDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            carOffer: {},
            isSeller: false,
        };
    };

    componentDidMount = () => this.getCarOffer();

    getCarOffer = () => {
        let carId = this.props.match.params.carId;

        carOfferService.getOne(carId)
            .then(({ data }) => this.setState({ form: data }))
            .catch(error => { throw error });
    };

    render = () => {
        if (this.state?.form) {
            var { _id, title, description, brand, model, year, imageUrl, fuel, price, seller } = this.state?.form;
        };

        return (
            <div className="listing-details">
                <div className="my-listing-details">
                    <p id="auto-title">{title}</p>
                    <img src={imageUrl} alt={brand} />
                    <div className="listing-props">
                        <h2>Brand: {brand}</h2>
                        <h3>Model: {model}</h3>
                        <h3>Year: {year}</h3>
                        <h3>Fuel: {fuel}</h3>
                        <h3>Price: {price} $</h3>
                    </div>

                    {/* Seller View */}
                    {carOfferService.isSeller(seller) ? <SellerView _id={_id} /> : null}

                    {/* Everyone View */}
                    <p id="description-title">{title}:</p>
                    <p id="description-para">{description}</p>
                </div>
            </div>
        );
    }
};

export default CarOfferDetails;