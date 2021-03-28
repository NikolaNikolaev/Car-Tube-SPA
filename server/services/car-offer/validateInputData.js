const { isEmpty, isLength } = require('validator');
const { empty, short } = require('../common/validate');

const validateInputData = (form) => {
    // Validate Existence
    let errors = [];
    Object.keys(form).map(name => {
        if (isEmpty(form[name].toString())) errors.push(empty(`${name}`));
    });     

    // Validate Length
    let { title, description, brand, model, fuel } = form;

    if (!isLength(title, { min: 6, max: 15 })) return short('title', 6, 15);
    if (!isLength(description, { min: 10, max: 30 })) return short('description', 10, 30);
    if (!isLength(brand, { min: 3, max: 15 })) return short('brand', 3, 15);
    if (!isLength(model, { min: 3, max: 15 })) return short('model', 3, 15);
    if (!isLength(fuel, { min: 6, max: 15 })) return short('fuel', 6, 15);

    // Return First Error
    return errors[0];
};

module.exports = validateInputData;