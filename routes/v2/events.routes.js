const router = require('express').Router();

/**
 * @route GET /v2/events
 * @description Get past and upcoming election events
 * @access public
 */
router.get('/', async(req, res) => {
    try {
        const events = require('../../data/v2/events.json');
        res.status(200).json({
            events,
            success: true,
            message: 'Past and Upcoming events retrieved'
        })
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
            success: false
        })
    }
})

/**
 * @route GET /v2/events/past_events
 * @description Get past events
 * @access public
 */
router.get('/past_events', async(req, res) => {
    try {
        const events = require('../../data/v2/events.json');
        let past_events = []
        events.forEach(item => {
            if (item.status === 'Past') {
                past_events.push(item)
            }
        });
        res.status(200).json({
            past_events,
            success: true,
            message: 'Past events successfully retrieved'
        })
    } catch (error) {

    }
})

/**
 * @route GET /v2/events/upcoming_events
 * @description Get past events
 * @access public
 */
router.get('/upcoming_events', async(req, res) => {
    try {
        const events = require('../../data/v2/events.json');
        let upcoming_events = []
        events.forEach(item => {
            if (item.status === 'Upcoming') {
                upcoming_events.push(item)
            }
        });
        res.status(200).json({
            upcoming_events,
            success: true,
            message: 'Upcoming events successfully retrieved'
        })
    } catch (error) {

    }
})

module.exports = router;