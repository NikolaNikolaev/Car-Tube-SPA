import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

import carOfferService from '../../../services/car-offer/carOfferService';
import homeEndpoints from '../../../services/api/homeEndpoints';

class DeleteCarOffer extends Component {
    constructor(props) {
        super(props);
    };

    componentDidMount = () => {
        // Delete Car Offer and Show Notification 
        const _id = this.props.match.params.carId;
        carOfferService.deleteOne(_id);
    };

    render = () => <Redirect to={homeEndpoints.HOME_ENDPOINT} />
};

export default DeleteCarOffer;