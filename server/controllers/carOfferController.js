const { Router } = require('express');
const router = Router();

const carOfferService = require('../services/car-offer/carOfferService');

// Get All
router.get('/all', (req, res) => {
    carOfferService.getAll()
        .then(data => res.json({ data }))
        .catch(error => res.json({ error }));
});

// Get One
router.get('/:carId/details', (req, res) => {
    carOfferService.getOne(req.params.carId)
        .then(data => res.json({ data }))
        .catch(error => res.json({ error }));
});

// Get My 
router.post('/my', (req, res) => {
    carOfferService.getMy(req.body)
        .then(data => res.json({ data }))
        .catch(error => res.json({ error }));
});

// Create
router.post('/create', (req, res) => {
    carOfferService.create(req.body)
        .then(() => res.json({ success: true }))
        .catch(error => res.json({ error }));
});

// Edit
router.put('/:carId/edit', (req, res) => {
    carOfferService.edit(req.body, req.params.carId)
        .then(() => res.json({ success: true }))
        .catch(error => res.json({ error }));
});

// Delete One
router.delete('/:carId/delete', (req, res) => {
    carOfferService.deleteOne(req.body)
        .then(() => res.json({ success: true }))
        .catch(error => res.json({ error }));
});

module.exports = router;