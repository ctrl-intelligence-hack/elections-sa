const express = require('express');
const router = express.Router();

router.get('/test', async(req, res) => {
    let eastern_cape = require('../data/municipalities2016/easternCape.json');
    let free_state = require('../data/municipalities2016/freeState.json');
    let gauteng = require('../data/municipalities2016/gauteng.json');
    let kwazulu_natal = require('../data/municipalities2016/kwazuluNatal.json');
    let limpopo = require('../data/municipalities2016/limpopo.json');
    let mpumalanga = require('../data/municipalities2016/mpumalanga.json');
    let north_west = require('../data/municipalities2016/northWest.json');
    let northern_cape = require('../data/municipalities2016/northernCape.json');
    let western_cape = require('../data/municipalities2016/westernCape.json');
    western_cape.forEach(element => {
        console.log(element.name)
    });
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

/**
 * @route GET /v1/municipalElections/2016/province?name="province_name"
 * @description Get 2016 municipality results by province
 * @access public
 */
router.get('/2016/province', async(req, res) => {
    let name = req.query.name;
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
        if (name === 'Eastern Cape') {
            res.status(200).json({
                eastern_cape
            })
        } else if (name === 'Free State') {
            res.status(200).json({
                free_state
            })
        } else if (name === 'Gauteng') {
            res.status(200).json({
                gauteng
            })
        } else if (name === 'Kwazulu-Natal') {
            res.status(200).json({
                kwazulu_natal
            })
        } else if (name === 'Limpopo') {
            res.status(200).json({
                limpopo
            })
        } else if (name === 'Mpumalanga') {
            res.status(200).json({
                mpumalanga
            })
        } else if (name === 'North West') {
            res.status(200).json({
                north_west
            })
        } else if (name === 'Nothern Cape') {
            res.status(200).json({
                northern_cape
            })
        } else if (name === 'Western Cape') {
            res.status(200).json({
                western_cape
            })
        } else {
            res.status(404).json({
                message: `${name} province was not found`
            })
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

/**
 * @route GET /v1/municipalElections/2016/municipality?province_name="province_name"&municipality_name="municipality_name"
 * @description Get 2016 municipality results using municipality name
 * @access public
 */
router.get('/2016/municipality', async(req, res, next) => {
    let province_name = req.query.province_name;
    let municipality_name = req.query.municipality_name;

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
        if (province_name === 'Eastern Cape') {
            eastern_cape.forEach(item => {
                while (municipality_name === item.name) {
                    res.status(200).json({
                        item
                    })
                }
                next()
            });
        } else if (province_name === 'Free State') {
            free_state.forEach(item => {
                while (municipality_name === item.name) {
                    res.status(200).json({
                        item
                    })
                }
                next()
            });
        } else if (province_name === 'Guateng') {
            gauteng.forEach(item => {
                while (municipality_name === item.name) {
                    res.status(200).json({
                        item
                    })
                }
                next()
            });
        } else if (province_name === 'Kwazulu-Natal') {
            kwazulu_natal.forEach(item => {
                while (municipality_name === item.name) {
                    res.status(200).json({
                        item
                    })
                }
                next()
            });
        } else if (province_name === 'Limpopo') {
            limpopo.forEach(results => {
                while (results.name === municipality_name) {
                    res.status(200).json({
                        results
                    })
                }
            });
        } else if (province_name === 'Mpumalanga') {
            mpumalanga.forEach(item => {
                while (municipality_name === item.name) {
                    res.status(200).json({
                        item
                    })
                }
                next()
            });
        } else if (province_name === 'North West') {
            north_west.forEach(item => {
                if (municipality_name === item.name) {
                    res.status(200).json({
                        item
                    })
                }
                next()
            });
        } else if (province_name === 'Northern Cape') {
            northern_cape.forEach(item => {
                if (municipality_name === item.name) {
                    res.status(200).json({
                        item
                    })
                }
                next()
            });
        } else if (province_name === 'Western Cape') {
            western_cape.forEach(item => {
                if (municipality_name === item.name) {
                    res.status(200).json({
                        item
                    })
                }
                next()
            });
        }
    } catch (error) {

    }
})


module.exports = router;