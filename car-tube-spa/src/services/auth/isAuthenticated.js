import config from '../../config/config';
import verifyJWT from '../common/verifyJWT';

const isAuthenticated = () => {
    const token = sessionStorage.getItem(config.AUTH_TOKEN);
    if (token) {
        // Authenticated (if not invalid JWT)
        const decoded = verifyJWT();
        return decoded.message ? false : true;
    };
    // Not Authenticated
};

export default isAuthenticated;