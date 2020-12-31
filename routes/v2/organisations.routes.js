const router = require('express').Router();
const organisations = require('../../data/v2/organisations');

/**
 * @route GET /v2/organisations
 * @description Get all organisations
 * @access private
 */
router.get('/', (req, res) => {
    try {
        res.status(200).json({
            organisations,
            message: 'All South Africa political parties successfully retrieved',
            success: true
        })
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
            success: false,
            error
        })
    }
})
module.exports = router;