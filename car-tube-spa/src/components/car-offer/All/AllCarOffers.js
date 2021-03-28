import React, { Component } from 'react';

import CarOffer from '../CarOffer';
import carOfferService from '../../../services/car-offer/carOfferService';

class AllCarOffers extends Component {
    constructor(props) {
        super(props);

        this.state = { cars: [] };
    };

    componentDidMount = () => this.getAllCars();

    getAllCars = () => {
        carOfferService.getAll()
            .then(({ data }) => this.setState({ cars: data }));
    };

    isSeller = seller => carOfferService.isSeller(seller)

    render = () => {
        const allCarsElement = this.state.cars.map(car => <CarOffer {...car} isSeller={this.isSeller(car.seller)} />)

        const noCarsElement = (<p className="no-cars">No cars in database.</p>);

        return (
            <div id="car-listings">
                <h1>Car Listings</h1>
                <div id="listings">

                    {/* Display All Cars (if any) */}
                    {this.state.cars ? allCarsElement : noCarsElement}

                </div>
            </div>
        );
    };
};

export default AllCarOffers;