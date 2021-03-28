function onChange(event) {
    let inputName = event.target.name;
    let inputValue = event.target.value;

    this.setState(prevState => {
        prevState.form[inputName] = inputValue;
        return prevState;
    });
};

export default onChange;