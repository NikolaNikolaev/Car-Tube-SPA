import { Link } from 'react-router-dom';
import '../../style/navigation.css';
import authEndpoints from '../../services/api/authEndpoints';

const GuestView = () => (
    <div>
        <h2>Login or register to check out our listings or to make one</h2>
        <div id="button-div">
            <Link to={authEndpoints.LOGIN_FORM_ENDPOINT} className="button">Login</Link>
            <Link to={authEndpoints.REGISTER_FORM_ENDPOINT} className="button">Register</Link>
        </div>
    </div>
);

export default GuestView;