const express = require('express');
const router = express.Router();

/**
 * @route GET /v1/national/2014
 * @description Get 2014 nationl election results
 * @access public
 */
router.get('/2014', async(req, res) => {
    const data = require('../data/national2014.json');
    try {
        res.status(200).json({
            results: data
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

/**
 * @route GET v1/national/2014/topThree
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

    }
})

/**
 * @route GET /national/2016
 * @description Get 2016 nationl election results
 * @access public
 */
router.get('/2019', async(req, res) => {
    const data = require('../data/national2019.json');
    try {
        res.status(200).json({
            results: data
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

/**
 * @route GET v1/national/2014/topThree
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

    }
})

module.exports = router;