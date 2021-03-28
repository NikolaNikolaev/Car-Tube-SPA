import authMessages from '../../services/notification/authMessages';
import { short } from '../../services/common/validateInputData';
import { equals, isLength } from 'validator';

const register = {
    defaultState: {
        email: '',
        password: '',
        repeatPassword: '',
    },
    validate: ({ email, password, repeatPassword }) => {
        if (!equals(password, repeatPassword)) return authMessages.differentPasswords;

        if (!isLength(email, { min: 6, max: 15 })) return short('email', 6, 15);
        if (!isLength(password, { min: 6, max: 15 })) return short('password', 6, 15);
        if (!isLength(repeatPassword, { min: 6, max: 15 })) return short('repeatPassword', 6, 15);
    }
};

export default register;