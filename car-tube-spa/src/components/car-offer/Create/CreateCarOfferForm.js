import React, { Component } from 'react';

import withFormManager from '../../../hocs/withFormManager';
import carOfferModel from '../../../models/car-offer/carOfferModel';
import carOfferService from '../../../services/car-offer/carOfferService';

import Form from '../../common/Form/Form';
import formData from './formData/formData';

class CreateCarOfferForm extends Component {
    render = () => Form.call(this, formData)
};

export default withFormManager(CreateCarOfferForm, carOfferModel, carOfferService.create);