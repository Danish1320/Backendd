const express = require('express');
const Model= require('../models/usermodel')

const router = express.Router();

router.post('/add', (req, res) => {
    console.log(req.body);
    new Model(req.body).save()
    .then((result) => {
        res.status(200).json(result);
        
    }).catch((err) => {
        console.log(err);
        
        res.status(500).json(err);
        
    });
});

router.put('/update/:id', (req, res) => {
    Model.findByIdAndUpdate(req.params.id, req.body)
    .then((result))
});

// : denotes url parameter
router.get('/getbyid/:id', (req, res) => {
    console.log(req.params.id);
    res.send('Response from user getbyid');
});

router.get('/update', (req, res) => {
    res.send('Response from user update');
});

router.get('/delete', (req, res) => {
    res.send('Response from user delete');

});

module.exports = router;
