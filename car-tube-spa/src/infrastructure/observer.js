const subscriptions = {
    notifications: [],
    loggedIn: [],
    loggedOut: [],
};

const events = {
    notifications: 'notifications',
    loggedIn: 'loggedIn',
    loggedOut: 'loggedOut'
};
const subscribe = (eventName, callback) => subscriptions[eventName].push(callback); 
const trigger = (eventName, data) => subscriptions[eventName].forEach(callback => callback(data)); 

export default {
    events,
    subscribe,
    trigger,
};