import { Route, Switch } from 'react-router-dom';
import '../style/login-register.css';

import authEndpoints from '../services/api/authEndpoints';

import RegisterForm from '../components/auth/Register/RegisterForm';
import LoginForm from '../components/auth/Login/LoginForm';
import Logout from '../components/auth/Logout';

const AuthController = () => {
    const { REGISTER_FORM_ENDPOINT, LOGIN_FORM_ENDPOINT, LOGOUT_ENDPOINT } = authEndpoints;

    return (
        <Switch>
            <Route exact path={REGISTER_FORM_ENDPOINT} component={RegisterForm} />
            <Route exact path={LOGIN_FORM_ENDPOINT} component={LoginForm} />
            <Route exact path={LOGOUT_ENDPOINT} component={Logout} />
        </Switch>
    );
};

export default AuthController;