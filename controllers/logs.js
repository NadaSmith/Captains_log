const express = require('express');
const router = express.Router();
const Log = require('../models/log');



//INDUCES
// Index Route
router.get('/', (req, res) => {
    Log.find()
        .then((logs) => {
        res.render('index', { logs });
        })
        .catch((error) => {
        console.error(error);
        res.status(500).send('Internal Server Error');
        });
});

// New Route
router.get('/new', (req, res) => {
  res.render('new');
});

// Delete Route
router.delete('/:id', (req, res) => {
    Log.findByIdAndRemove(req.params.id)
        .then((log) => {
            if (!log) {
            res.status(404).send('Log not found');
            } else {
            res.redirect('/logs');
            }
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send('Internal Server Error');
        });
});

// Update Route
router.put('/:id', (req, res) => {
    Log.findByIdAndUpdate(req.params.id, req.body)
        .then((log) => {
            if (!log) {
            res.status(404).send('Log not found');
            } else {
            res.redirect(`/logs/${log._id}`);
            }
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send('Internal Server Error');
        });
});

// Create Route
router.post('/', (req, res) => {
    const newLog = new Log(req.body);
    newLog
        .save()
        .then((log) => {
        res.redirect(`/logs/${log._id}`);
        })
        .catch((error) => {
        console.error(error);
        res.status(500).send('Internal Server Error');
        });
});

// Edit Route
router.get('/:id/edit', (req, res) => {
    Log.findById(req.params.id)
        .then((log) => {
            if (!log) {
            res.status(404).send('Log not found');
            } else {
            res.render('edit', { log });
            }
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send('Internal Server Error');
        });
});

// Show Route
router.get('/:id', (req, res) => {
    Log.findById(req.params.id)
        .then((log) => {
        if (!log) {
            res.status(404).send('Log not found');
        } else {
            res.render('show', { log });
        }
        })
        .catch((error) => {
        console.error(error);
        res.status(500).send('Internal Server Error');
        });
});

// Other routes (Edit, Update, Delete) will follow similar patterns

module.exports = router;
