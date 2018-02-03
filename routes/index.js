const express = require('express')
const dataController = require('../controllers/dataController');
const api = express.Router();

api.get('/data', dataController.get);
api.post('/data', dataController.post);
api.get('/template', dataController.template);
api.post('/template', dataController.deleteItem);

module.exports = api;
