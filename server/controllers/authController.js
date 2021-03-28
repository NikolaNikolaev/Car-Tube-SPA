const { Router } = require('express');
const router = Router();

const authService = require('../services/auth/authService');

// Register
router.post('/register', (req, res) => {
    authService.register(req.body)
        .then(() => res.json({ success: true }))
        .catch(error => res.json({ error }));
});

// Login
router.post('/login', (req, res) => {
    authService.login(req.body)
        .then(user => res.json({ success: true, data: user }))
        .catch(error => res.json({ error }));
});

module.exports = router;