import { short } from '../../services/common/validateInputData';
import { isLength } from 'validator';

const login = {
    defaultState: {
        email: '',
        password: '',
    },
    validate: ({ email, password }) => {
        if (!isLength(email, { min: 6, max: 15 })) return short('email', 6, 15);
        if (!isLength(password, { min: 6, max: 15 })) return short('password', 6, 15);
    }
};

export default login;