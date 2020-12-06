const express = require('express');
const router = express.Router();
const data = require('../data/organisations')

/**
 * @route GET /v1/organisations
 * @description Get all organisations
 * @access public
 */
router.get('/', async(req, res) => {
    try {
        res.status(200).json({
            organisations: data
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

module.exports = router;