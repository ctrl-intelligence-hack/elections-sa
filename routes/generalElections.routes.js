const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

/**
 * @route GET /v1/generalElections/2019
 * @description Get 2016 nationl election results
 * @access public
 */
router.get('/2019', async(req, res) => {
    var national2019Schema = mongoose.Schema({
        name: String
    })
    const National = mongoose.model('national2019', national2019Schema);
    try {
        National.find().then((docs) => {
            let results = docs[0];
            res.status(200).json({
                results
            })
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
    const data = require('../data/national2019.json');
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
    var national2014Schema = mongoose.Schema({
        name: String
    })
    const National = mongoose.model('national2014', national2014Schema);
    try {
        National.find().then((docs) => {
            let results = docs[0];
            res.status(200).json({
                results
            })
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
    const data = require('../data/national2014.json');
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
    const data = require('../data/national2009.json');
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
    const data = require('../data/national2009.json');
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

    }
})

/**
 * @route GET /v1/generalElections/2004
 * @description Get 2004 nationl election results
 * @access public
 */
router.get('/2004', async(req, res) => {
    const data = require('../data/national2004.json');
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
    const data = require('../data/national2004.json');
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

    }
})

module.exports = router;