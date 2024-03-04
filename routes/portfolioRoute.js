const express = require('express');
const { sendEmailController } = require('../controllers/portfolioController'); // Corrected function name

// Create a router object
const router = express.Router();

// Define routes
router.post('/sendEmail', sendEmailController); // Corrected function name

// Export the router
module.exports = router;