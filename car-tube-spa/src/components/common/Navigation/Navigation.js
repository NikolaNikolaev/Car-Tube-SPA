import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../../style/navigation.css';

import AuthView from './AuthView';
import homeEndpoints from '../../../services/api/homeEndpoints';
import withAuthManager from '../../../hocs/withAuthManager';

class Navigation extends Component {
    render = () => (
        <nav>
            <Link class="active" to={homeEndpoints.HOME_ENDPOINT}>Home</Link>
            {/* Auth View */}
            {this.props.isAuthenticated ? <AuthView /> : null}
        </nav>
    );
};

export default withAuthManager(Navigation);