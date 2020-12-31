const router = require('express').Router();
const { query } = require('express');
const { calculateLimitAndOffset, paginate } = require('paginate-info')
const organisations = require('../../data/v2/organisations');

/**
 * @route GET /v2/organisations
 * @description Get all organisations
 * @access private
 */
router.get('/', (req, res) => {
    const { currentPage, pageSize } = req.query;
    const { limit, offset } = calculateLimitAndOffset(currentPage, pageSize);
    const count = organisations.length;
    const paginatedData = organisations.slice(offset, offset + limit);
    const paginationInfo = paginate(currentPage, count, paginatedData);
    try {

        res.status(200).json({
            data: { results: paginatedData, meta: paginationInfo },
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