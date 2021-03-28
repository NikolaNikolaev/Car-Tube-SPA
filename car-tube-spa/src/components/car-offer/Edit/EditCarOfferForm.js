import React, { Component } from 'react';

import carOfferModel from '../../../models/car-offer/carOfferModel';
import carOfferService from '../../../services/car-offer/carOfferService';

import onChange from '../../../hocs/helpers/onChange';
import onSubmit from '../../../hocs/helpers/onSubmit';

class EditCarOfferForm extends Component {
    constructor(props) {
        super(props);

        this.state = { form: {} };
    };

    componentDidMount = () => this.getCarOffer();

    getCarOffer = () => {
        let carId = this.props.match.params.carId;

        carOfferService.getOne(carId)
            .then(({ data }) => this.setState({ form: data }))
            .catch(error => { throw error });
    };

    onChange = event => onChange.call(this, event)

    onSubmit = event => onSubmit.call(this, event, carOfferModel, carOfferService.edit)

    handleError = error => {
        carOfferService.edit.fail(error);
        this.clearInputFields();
    };

    clearInputFields = () => this.setState({ form: { ...carOfferModel.defaultState } })

    render = () => {
        if (this.state?.form) {
            var { title, description, brand, model, year, imageUrl, fuel, price } = this.state?.form;
        };

        return (
            <div id="edit-listing">
                <form onSubmit={this.onSubmit}>
                    <div className="container">
                        <h1>Edit Car Listing</h1>
                        <p>Please fill in this form to edit an listing.</p>
                        <hr />

                        <p>Title</p>
                        <input type="text" name="title" defaultValue={title} id="edit-car-title" onChange={this.onChange} />
                        <p>Description</p>
                        <input type="text" name="description" defaultValue={description} id="edit-car-description" onChange={this.onChange} />
                        <p>Car Brand</p>
                        <input type="text" name="brand" defaultValue={brand} id="edit-car-brand" onChange={this.onChange} />
                        <p>Car Model</p>
                        <input type="text" name="model" defaultValue={model} id="edit-car-model" onChange={this.onChange} />
                        <p>Car Year</p>
                        <input type="number" name="year" defaultValue={year} id="edit-car-year" onChange={this.onChange} />
                        <p>Car Image</p>
                        <input type="text" name="imageUrl" defaultValue={imageUrl} id="edit-car-imageUrl" onChange={this.onChange} />
                        <p>Car Fuel Type</p>
                        <input type="text" name="fuel" defaultValue={fuel} id="edit-car-fuelType" onChange={this.onChange} />
                        <p>Car Price</p>
                        <input type="number" name="price" defaultValue={price} id="edit-car-price" onChange={this.onChange} />
                        <hr />
                        <button type="submit" className="registerbtn">Edit Listing</button>
                    </div>
                </form>
            </div>
        );
    };
};

export default EditCarOfferForm;