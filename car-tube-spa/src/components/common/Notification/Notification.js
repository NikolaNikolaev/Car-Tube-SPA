import React, { Component } from 'react';
import '../../../style/notifications.css';

import { defaultState, notificationIds } from './notificationsData';
import observer from '../../../infrastructure/observer';

class Notification extends Component {
    constructor(props) {
        super(props);

        this.state = defaultState;
        observer.subscribe(observer.events.notifications, this.showNotification);
    };

    showNotification = notification => this.setState(notification)

    hideNotification = () => this.setState(defaultState)

    render = () => {
        let { type, message } = this.state;
        let notificationId = notificationIds[type];

        const notificationElement = (
            <div id="notifications" >
                <div id={notificationId} class="notification" onClick={this.hideNotification}>
                    <span>{message}</span>
                </div>
            </div>
        );

        return type ? notificationElement : null;
    };
};

export default Notification;