const { Router } = require('express');
const { crear_orden, notification_orden } = require('../utils/utilsPayments');

const router = Router();

router.post('/buy', crear_orden);
router.post('/notification', notification_orden);


module.exports = router;