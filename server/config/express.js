const express = require('express');
const cors = require('cors');

const setupExpress = app => {
    // Set Body Parser
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    // Use Cors
    app.use(cors());
};

module.exports = setupExpress;