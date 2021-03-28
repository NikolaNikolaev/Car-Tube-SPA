import React, { Component } from 'react';

import withFormManager from '../../../hocs/withFormManager';
import authModel from '../../../models/auth/authModel';
import authService from '../../../services/auth/authService';

import Form from '../../common/Form/Form';
import formData from './formData/formData';

class RegisterForm extends Component {
    render = () => Form.call(this, formData)
};

export default withFormManager(RegisterForm, authModel.register, authService.register);