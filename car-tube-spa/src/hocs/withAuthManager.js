import React, { Component } from 'react';

import observer from '../infrastructure/observer';
import authService from '../services/auth/authService';

const withAuthManager = Component => {
    return class withAuthManager extends Component {
        constructor(props) {
            super(props);

            this.state = { isAuthenticated: false };

            observer.subscribe(observer.events.loggedIn, this.isAuthenticated);
            observer.subscribe(observer.events.loggedOut, this.isAuthenticated);
        };

        componentDidMount = () => this.isAuthenticated();

        isAuthenticated = () => {
            let isAuthenticated = authService.isAuthenticated();
            this.setState({ isAuthenticated });
        };

        render = () => <Component {...this.state} />
    };
};

export default withAuthManager;