import React, { Component } from 'react';

import onChange from './helpers/onChange';
import onSubmit from './helpers/onSubmit';

const withFormManager = (Form, model, submitter) => {
    return class withFormManager extends Component {
        constructor(props) {
            super(props);

            this.state = {
                form: { ...model.defaultState },
            };
        };

        onChange = event => onChange.call(this, event)

        onSubmit = event => onSubmit.call(this, event, model, submitter)

        handleError = error => {
            submitter.fail(error);
            this.clearInputFields();
        };

        clearInputFields = () => this.setState({ form: { ...model.defaultState } })

        render = () => (
            <Form
                onChange={this.onChange}
                onSubmit={this.onSubmit}
                {...this.state}
            />
        );
    };
};

export default withFormManager;