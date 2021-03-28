const capitalize = string => string[0].toUpperCase() + string.slice(1);

const short = (type, min, max) => `${capitalize(type)} Should Contain At Least ${min} Characters and At Most ${max} Characters`;

export {
    short,
};