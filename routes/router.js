const express = require('express');
const getData = require('../controllers/methods');
const router = express.Router();
const { getDATA, setDATA, updateDATA, deleteDATA } = require('../controllers/methods');


router.get('/', getDATA)
router.post('/', setDATA)
router.patch('/:id', updateDATA)
router.delete('/:id', deleteDATA)


module.exports = router