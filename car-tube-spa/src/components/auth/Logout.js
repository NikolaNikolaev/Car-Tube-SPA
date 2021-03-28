import observer from '../../infrastructure/observer';
import config from '../../config/config';
import authMessages from '../../services/notification/authMessages';
import { Redirect } from 'react-router';
import homeEndpoints from '../../services/api/homeEndpoints';

const Logout = () => {
    // Remove Auth Token and Display Guest View    
    sessionStorage.removeItem(config.AUTH_TOKEN);
    observer.trigger(observer.events.loggedOut, null);
    // Display Notification
    let message = authMessages.successfullyLoggedOut;
    let notification = { type: 'success', message };
    observer.trigger(observer.events.notifications, notification);
    // Redirect To Home Page
    return <Redirect to={homeEndpoints.HOME_ENDPOINT} />
};

export default Logout;