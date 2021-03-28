import React, { Component } from 'react';

import carOfferService from '../../../services/car-offer/carOfferService';
import verifyJWT from '../../../services/common/verifyJWT';
import MyCarOffer from './MyCarOffer';

class MyCarOffers extends Component {
    constructor(props) {
        super(props);

        this.state = { carOffers: [] };
    };

    componentDidMount = () => this.getMyCarOffers();

    getMyCarOffers = () => {
        let { _id } = verifyJWT();

        carOfferService.getMy(_id)
            .then(({ data }) => this.setState({ carOffers: data }));
    };

    render = () => {
        const myCarOffersElement = this.state.carOffers.map(carOffer => <MyCarOffer {...carOffer} />);

        const noCarOffersElement = (<p className="no-cars"> No cars in database.</p>);

        return (
            <div className="my-listings">
                <h1>My car listings</h1>
                <div className="car-listings">

                    {this.state.carOffers.length != 0
                        ? myCarOffersElement
                        : noCarOffersElement
                    }

                </div>
            </div>
        );
    };
};

export default MyCarOffers;