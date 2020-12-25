const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

/**
 * @route GET /v1/generalElections/2019
 * @description Get 2016 nationl election results
 * @access public
 */
router.get('/2019', async(req, res) => {
    const data = require('../data/national/national2019.json');
    try {
        let results = data;
        res.status(200).json({
            results
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

/**
 * @route GET /v1/generalElections/2014/topThree
 * @description Get top three political parties in the national 2014 elections
 * @access public
 */
router.get('/2019/topThree', async(req, res) => {
    const data = require('../data/national/national2019.json');
    try {
        let anc;
        let da;
        let eff;
        data.forEach(item => {
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
            }
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

/**
 * @route GET /v1/generalElections/2014
 * @description Get 2014 nationl election results
 * @access public
 */
router.get('/2014', async(req, res) => {
    const data = require('../data/national/national2014.json');
    try {
        let results = data;
        res.status(200).json({
            results
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

/**
 * @route GET /v1/generalElections/2014/topThree
 * @description Get top three political parties in the national 2014 elections
 * @access public
 */
router.get('/2014/topThree', async(req, res) => {
    const data = require('../data/national/national2014.json');
    try {
        let anc;
        let da;
        let eff;
        data.forEach(item => {
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
            }
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

/**
 * @route GET /v1/generalElections/2009
 * @description Get 2009 nationl election results
 * @access public
 */
router.get('/2009', async(req, res) => {
    const data = require('../data/national/national2009.json');
    try {
        let results = data;
        res.status(200).json({
            results
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

/**
 * @route GET /v1/generalElections/2009/topThree
 * @description Get top three political parties in the national 2009 elections
 * @access public
 */
router.get('/2009/topThree', async(req, res) => {
    const data = require('../data/national/national2009.json');
    console.log(data)
    try {
        let anc;
        let da;
        let cope;
        data.forEach(item => {
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
            }
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

/**
 * @route GET /v1/generalElections/2004
 * @description Get 2004 nationl election results
 * @access public
 */
router.get('/2004', async(req, res) => {
    const data = require('../data/national/national2004.json');
    try {
        let results = data;
        res.status(200).json({
            results
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

/**
 * @route GET /v1/generalElections/2009/topThree
 * @description Get top three political parties in the national 2009 elections
 * @access public
 */
router.get('/2004/topThree', async(req, res) => {
    const data = require('../data/national/national2004.json');
    try {
        let anc;
        let da;
        let ifp;
        data.forEach(item => {
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
            }
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

/**
 * @route GET /v1/generalElections/1999
 * @description Get 1999 nationl election results
 * @access public
 */
router.get('/1999', async(req, res) => {
    const data = require('../data/national/national1999.json');
    try {
        let results = data;
        res.status(200).json({
            results
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

/**
 * @route GET /v1/generalElections/2009/topThree
 * @description Get top three political parties in the national 2009 elections
 * @access public
 */
router.get('/1999/topThree', async(req, res) => {
    const data = require('../data/national/national1999.json');
    try {
        let anc;
        let da;
        let ifp;
        data.forEach(item => {
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
            }
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

/**
 * @route GET /v1/generalElections/1994
 * @description Get 1994 nationl election results
 * @access public
 */
router.get('/1994', async(req, res) => {
    const data = require('../data/national/national1994.json');
    try {
        let results = data;
        res.status(200).json({
            results
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

/**
 * @route GET /v1/generalElections/1994/topThree
 * @description Get top three political parties in the national 1994 elections
 * @access public
 */
router.get('/1994/topThree', async(req, res) => {
    const data = require('../data/national/national1994.json');
    try {
        let anc;
        let np;
        let ifp;
        data.forEach(item => {
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
            }
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

module.exports = router;