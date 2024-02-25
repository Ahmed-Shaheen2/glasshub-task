const { Router } = require('express');
const router = Router();

router.post('/upload', (req, res) => {
    res.sendStatus(200);
});

router.post('/location/create', (req, res) => {
    res.sendStatus(200);
});

router.get('/location/all', (req, res) => {
    res.sendStatus(200);
});

module.exports = router;