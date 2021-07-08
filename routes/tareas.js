const express = require('express');
const router = express.Router();
const tareasControllers = require('../controllers/tareasControllers');

router.get('/', tareasControllers.list);

router.post('/add', tareasControllers.guardar);

router.get('/borrar/:id', tareasControllers.borrar);

router.get('/actualizar/:id', tareasControllers.actualizar);

module.exports = router;