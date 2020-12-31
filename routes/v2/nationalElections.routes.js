const router = require('express').Router();

/**
 * @route GET /v2/generalElections/1994
 * @description Get 1994 nationl election results
 * @access public
 */
router.get('/1994', (req, res) => {
    try {
        const results = require('../../data/v2/national/national1994.json');
        res.status(200).json({
            results,
            message: '1994 National election results successfully retrieved',
            success: true
        })
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
            error,
            success: false
        })
    }
})

/**
 * @route GET /v2/generalElections/1994/topThree
 * @description Get top three political parties in the national 1994 elections
 * @access public
 */
router.get('/1994/top_three', (req, res) => {
    try {
        const results = require('../../data/v2/national/national1994.json');
        let anc;
        let np;
        let ifp;
        results.forEach(item => {
            if (item['AFRICAN NATIONAL CONGRESS']) {
                anc = item['AFRICAN NATIONAL CONGRESS']
            }
            if (item['NEW NATIONAL PARTY']) {
                np = item['NEW NATIONAL PARTY']
            }
            if (item['INKATHA FREEDOM PARTY']) {
                ifp = item['INKATHA FREEDOM PARTY']
            }
        });
        res.status(200).json({
            results: {
                'AFRICAN NATIONAL CONGRESS': anc,
                'NEW NATIONAL PARTY': np,
                'INKATHA FREEDOM PARTY': ifp
            },
            success: true,
            message: '1994 elections top three parties retrieved'
        })
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
            error,
            success: false
        })
    }
})

/**
 * @route GET /v2/generalElections/1999
 * @description Get 1999 nationl election results
 * @access public
 */
router.get('/1999', (req, res) => {
    try {
        const results = require('../../data/v2/national/national1999.json');
        res.status(200).json({
            results,
            message: '1999 National election results successfully retrieved',
            success: true
        })
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
            error,
            success: false
        })
    }
})

/**
 * @route GET /v2/generalElections/1999/top_three
 * @description Get top three political parties in the national 1999 elections
 * @access public
 */
router.get('/1999/top_three', (req, res) => {
    try {
        const results = require('../../data/v2/national/national1999.json');
        let anc;
        let da;
        let ifp;
        results.forEach(item => {
            if (item['AFRICAN NATIONAL CONGRESS']) {
                anc = item['AFRICAN NATIONAL CONGRESS']
            }
            if (item['DEMOCRATIC ALLIANCE']) {
                da = item['DEMOCRATIC ALLIANCE']
            }
            if (item['INKATHA FREEDOM PARTY']) {
                ifp = item['INKATHA FREEDOM PARTY']
            }
        });
        res.status(200).json({
            results: {
                'AFRICAN NATIONAL CONGRESS': anc,
                'DEMOCRATIC ALLIANCE': da,
                'INKATHA FREEDOM PARTY': ifp
            },
            success: true,
            message: '1999 elections top three parties retrieved'
        })
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
            error,
            success: false
        })
    }
})

/**
 * @route GET /v2/generalElections/2004
 * @description Get 2004 nationl election results
 * @access public
 */
router.get('/2004', (req, res) => {
    try {
        const results = require('../../data/v2/national/national2004.json');
        res.status(200).json({
            results,
            message: '2004 National election results successfully retrieved',
            success: true
        })
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
            error,
            success: false
        })
    }
})

/**
 * @route GET /v2/generalElections/2004/top_three
 * @description Get top three political parties in the national 2004 elections
 * @access public
 */
router.get('/2004/top_three', (req, res) => {
    try {
        const results = require('../../data/v2/national/national2004.json');
        let anc;
        let da;
        let ifp;
        results.forEach(item => {
            if (item['AFRICAN NATIONAL CONGRESS']) {
                anc = item['AFRICAN NATIONAL CONGRESS']
            }
            if (item['DEMOCRATIC ALLIANCE']) {
                da = item['DEMOCRATIC ALLIANCE']
            }
            if (item['INKATHA FREEDOM PARTY']) {
                ifp = item['INKATHA FREEDOM PARTY']
            }
        });
        res.status(200).json({
            results: {
                'AFRICAN NATIONAL CONGRESS': anc,
                'DEMOCRATIC ALLIANCE': da,
                'INKATHA FREEDOM PARTY': ifp
            },
            success: true,
            message: '2004 elections top three parties retrieved'
        })
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
            error,
            success: false
        })
    }
})

/**
 * @route GET /v2/generalElections/2009
 * @description Get 2009 nationl election results
 * @access public
 */
router.get('/2009', (req, res) => {
    try {
        const results = require('../../data/v2/national/national2009.json');
        res.status(200).json({
            results,
            message: '2009 National election results successfully retrieved',
            success: true
        })
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
            error,
            success: false
        })
    }
})

/**
 * @route GET /v2/generalElections/2009/top_three
 * @description Get top three political parties in the national 2004 elections
 * @access public
 */
router.get('/2009/top_three', (req, res) => {
    try {
        const results = require('../../data/v2/national/national2009.json');
        let anc;
        let da;
        let cope;
        results.forEach(item => {
            if (item['AFRICAN NATIONAL CONGRESS']) {
                anc = item['AFRICAN NATIONAL CONGRESS']
            }
            if (item['DEMOCRATIC ALLIANCE']) {
                da = item['DEMOCRATIC ALLIANCE']
            }
            if (item['CONGRESS OF THE PEOPLE']) {
                cope = item['CONGRESS OF THE PEOPLE']
            }
        });
        res.status(200).json({
            results: {
                'AFRICAN NATIONAL CONGRESS': anc,
                'DEMOCRATIC ALLIANCE': da,
                'CONGRESS OF THE PEOPLE': cope
            },
            success: true,
            message: '2009 elections top three parties retrieved'
        })
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
            error,
            success: false
        })
    }
})

/**
 * @route GET /v2/generalElections/2014
 * @description Get 2014 nationl election results
 * @access public
 */
router.get('/2014', (req, res) => {
    try {
        const results = require('../../data/v2/national/national2014.json');
        res.status(200).json({
            results,
            message: '2014 National election results successfully retrieved',
            success: true
        })
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
            error,
            success: false
        })
    }
})

/**
 * @route GET /v2/generalElections/2014/top_three
 * @description Get top three political parties in the national 2014 elections
 * @access public
 */
router.get('/2014/top_three', (req, res) => {
    try {
        const results = require('../../data/v2/national/national2014.json');
        let anc;
        let da;
        let eff;
        results.forEach(item => {
            if (item['AFRICAN NATIONAL CONGRESS']) {
                anc = item['AFRICAN NATIONAL CONGRESS']
            }
            if (item['DEMOCRATIC ALLIANCE']) {
                da = item['DEMOCRATIC ALLIANCE']
            }
            if (item['ECONOMIC FREEDOM FIGHTERS']) {
                eff = item['ECONOMIC FREEDOM FIGHTERS']
            }
        });
        res.status(200).json({
            results: {
                'AFRICAN NATIONAL CONGRESS': anc,
                'DEMOCRATIC ALLIANCE': da,
                'ECONOMIC FREEDOM FIGHTERS': eff
            },
            success: true,
            message: '2014 elections top three parties retrieved'
        })
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
            error,
            success: false
        })
    }
})

/**
 * @route GET /v2/generalElections/2019
 * @description Get 2019 nationl election results
 * @access public
 */
router.get('/2019', (req, res) => {
    try {
        const results = require('../../data/v2/national/national2019.json');
        res.status(200).json({
            results,
            message: '2019 National election results successfully retrieved',
            success: true
        })
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
            error,
            success: false
        })
    }
})


/**
 * @route GET /v2/generalElections/2019/top_three
 * @description Get top three political parties in the national 2019 elections
 * @access public
 */
router.get('/2019/top_three', (req, res) => {
    try {
        const results = require('../../data/v2/national/national2019.json');
        let anc;
        let da;
        let eff;
        results.forEach(item => {
            if (item['AFRICAN NATIONAL CONGRESS']) {
                anc = item['AFRICAN NATIONAL CONGRESS']
            }
            if (item['DEMOCRATIC ALLIANCE']) {
                da = item['DEMOCRATIC ALLIANCE']
            }
            if (item['ECONOMIC FREEDOM FIGHTERS']) {
                eff = item['ECONOMIC FREEDOM FIGHTERS']
            }
        });
        res.status(200).json({
            results: {
                'AFRICAN NATIONAL CONGRESS': anc,
                'DEMOCRATIC ALLIANCE': da,
                'ECONOMIC FREEDOM FIGHTERS': eff
            },
            success: true,
            message: '2019 elections top three parties retrieved'
        })
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
            error,
            success: false
        })
    }
})

module.exports = router;