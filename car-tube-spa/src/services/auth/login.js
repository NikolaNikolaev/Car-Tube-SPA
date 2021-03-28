import authEndpoints from '../api/authEndpoints';
import homeEndpoints from '../api/homeEndpoints';

import authMessages from '../notification/authMessages';

import send from '../common/submitData/send';
import success from '../common/submitData/success';
import fail from '../common/submitData/fail';

import jwt from 'jsonwebtoken';
import config from '../../config/config';
import observer from '../../infrastructure/observer';

const login = {
    send: form => send(authEndpoints.LOGIN_FORM_ENDPOINT, 'POST', form),
    success: async function () {
        // Sign Up JWT
        let { _id, email } = this.data;
        const token = await jwt.sign({ _id, email }, config.SECRET_KEY);
        sessionStorage.setItem(config.AUTH_TOKEN, token);
        // Show Notification and Redirect To Home Page
        let message = authMessages.successfullyLoggedIn;
        let notification = { type: 'success', message };
        success.call(this, notification, homeEndpoints.HOME_ENDPOINT);
        // Display Auth View
        observer.trigger(observer.events.loggedIn, null);
    },
    fail: error => fail(error)
};

export default login;