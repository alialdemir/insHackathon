const express = require('express')
const dataController = require('../controllers/dataController');
const api = express.Router();

api.get('/data', dataController.get);
api.post('/data', dataController.post);
api.get('/template', dataController.template);

module.exports = api;
