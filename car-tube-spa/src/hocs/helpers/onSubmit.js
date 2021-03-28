function onSubmit(event, model, submitter) {
    event.preventDefault();
    // Validate Input Data
    let error = model.validate(this.state.form);
    if (error) return this.handleError(error);
    // Submit Data
    submitter.send(this.state.form)
        .then(({ success, error, data }) => {
            if (error) { throw error };
            if (data) { Object.assign(this, { data }) }
            if (success) submitter.success.call(this);
        })
        .catch(error => this.handleError(error));
};

export default onSubmit;