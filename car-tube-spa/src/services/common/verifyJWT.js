import jwt from 'jsonwebtoken';
import config from '../../config/config';

const verifyJWT = () => {
    const token = sessionStorage.getItem(config.AUTH_TOKEN);
    return jwt.verify(token, config.SECRET_KEY, (error, decoded) => {
        if (error) return error;

        return decoded;
    });
};

export default verifyJWT;
