import observer from '../../../infrastructure/observer';

const fail = error => {
    // Show Error Notification
    let notification = { type: 'error', message: error };
    observer.trigger(observer.events.notifications, notification);
};

export default fail;