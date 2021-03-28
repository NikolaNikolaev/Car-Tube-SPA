const { Router } = require('express');
const router = Router();

const authController = require('./controllers/authController');
const carOfferController = require('./controllers/carOfferController');

router.use('/auth', authController);
router.use('/cars', carOfferController);

module.exports = router;