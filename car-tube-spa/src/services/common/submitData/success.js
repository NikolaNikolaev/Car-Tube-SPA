import observer from '../../../infrastructure/observer';

function success(notification, endpoint) {
    // Show Notification and Redirect
    observer.trigger(observer.events.notifications, notification);
    this.props.history.push(endpoint);
};

export default success;