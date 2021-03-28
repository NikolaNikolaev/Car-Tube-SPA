import React, { Component } from 'react';
import '../../style/welcome.css';

import withAuthManager from '../../hocs/withAuthManager';
import GuestView from './GuestView';
import carIntroImageUrl from '../../style/images/finance-car.png';

class Home extends Component {
    render = () => (
        <div id="main">
            <div id="welcome-container">
                <h1>Welcome To Car Tube</h1>
                <img src={carIntroImageUrl} alt="carIntro" />
                {/* Guest View */}
                {this.props.isAuthenticated ? null : <GuestView />}
            </div>
        </div>
    );
};

export default withAuthManager(Home);