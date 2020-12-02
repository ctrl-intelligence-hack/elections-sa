const express = require('express');
const router = express.Router();
const data = require('../data/provicial2016.json');


/**
 * @route GET /v1/municipalElections/2016/provinceResults
 * @description Get 2016 municipal results in all provices
 * @access public
 */
router.get('/2016/provinceResults', async(req, res) => {
    try {
        let eastern_cape;
        let free_state;
        let gauteng;
        let kwazulu_natal;
        let limpopo;
        let mpumalanga;
        let north_west;
        let northern_cape;
        let western_cape;
        data.forEach(item => {
            if (item.name === 'Free State') {
                free_state = item
            }
            if (item.name === 'Eastern Cape') {
                eastern_cape = item
            }
            if (item.name === 'Gauteng') {
                gauteng = item
            }
            if (item.name === 'Limpopo') {
                limpopo = item
            }
            if (item.name === 'KwaZulu-Natal') {
                kwazulu_natal = item
            }
            if (item.name === 'Mpumalanga') {
                mpumalanga = item
            }
            if (item.name === 'North West') {
                north_west = item
            }
            if (item.name === 'Northern Cape') {
                northern_cape = item
            }
            if (item.name === 'Western Cape') {
                western_cape = item
            }
        });
        res.status(200).json({
            eastern_cape,
            free_state,
            gauteng,
            kwazulu_natal,
            limpopo,
            mpumalanga,
            north_west,
            northern_cape,
            western_cape
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

/**
 * @route GET /v1/municipalElections/2016/province?geo_code=code
 * @description Get province municipal results by geo code
 * @access public
 */
router.get('/2016/province', async(req, res) => {
    let province_code = req.query.geo_code;
    try {
        data.forEach(results => {
            if (results.geo_code === province_code) {
                res.status(200).json({
                    results
                })
            } else {
                res.status(404).json({
                    message: `Province with geo code ${province_code} not found`
                })
            }
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

/**
 * @route GET /v1/municipalElections/2016/organisation?name="Name of political party"
 * @description get organisation total votes per province
 * @access public
 */
router.get('/2016/organisation', async(req, res) => {
    let name = req.query.name;
    try {
        let eastern_cape;
        let free_state;
        let gauteng;
        let kwazulu_natal;
        let limpopo;
        let mpumalanga;
        let north_west;
        let northern_cape;
        let western_cape;
        data.forEach(item => {
            if (item.name === 'Free State') {
                free_state = item[name]
            }
            if (item.name === 'Eastern Cape') {
                eastern_cape = item[name]
            }
            if (item.name === 'Gauteng') {
                gauteng = item[name]
            }
            if (item.name === 'Limpopo') {
                limpopo = item[name]
            }
            if (item.name === 'KwaZulu-Natal') {
                kwazulu_natal = item[name]
            }
            if (item.name === 'Mpumalanga') {
                mpumalanga = item[name]
            }
            if (item.name === 'North West') {
                north_west = item[name]
            }
            if (item.name === 'Northern Cape') {
                northern_cape = item[name]
            }
            if (item.name === 'Western Cape') {
                western_cape = item[name]
            }
        });
        res.status(200).json({
            eastern_cape,
            free_state,
            gauteng,
            kwazulu_natal,
            limpopo,
            mpumalanga,
            north_west,
            northern_cape,
            western_cape
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

/**
 * @route GET /v1/municipalElections/2016/municipalities
 * @description GET 2016 municipal elections results per municipalities
 * @access public
 */
router.get('/2016/municipalities', async(req, res) => {
    let eastern_cape = require('../data/municipalities2016/easternCape.json');
    let free_state = require('../data/municipalities2016/freeState.json');
    let gauteng = require('../data/municipalities2016/gauteng.json');
    let kwazulu_natal = require('../data/municipalities2016/kwazuluNatal.json');
    let limpopo = require('../data/municipalities2016/limpopo.json');
    let mpumalanga = require('../data/municipalities2016/mpumalanga.json');
    let north_west = require('../data/municipalities2016/northWest.json');
    let northern_cape = require('../data/municipalities2016/northernCape.json');
    let western_cape = require('../data/municipalities2016/westernCape.json');
    try {
        res.status(200).json({
            eastern_cape,
            free_state,
            gauteng,
            kwazulu_natal,
            limpopo,
            mpumalanga,
            north_west,
            northern_cape,
            western_cape
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})


module.exports = router;