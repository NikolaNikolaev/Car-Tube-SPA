import authEndpoints from '../api/authEndpoints';
import authMessages from '../notification/authMessages';

import send from '../common/submitData/send';
import success from '../common/submitData/success';
import fail from '../common/submitData/fail';

const register = {
    send: form => send(authEndpoints.REGISTER_FORM_ENDPOINT, 'POST', form),
    success: function () {
        let notification = { type: 'success', message: authMessages.successfullyRegistered };
        return success.call(this, notification, authEndpoints.LOGIN_FORM_ENDPOINT);
    },
    fail: error => fail(error)
};

export default register;