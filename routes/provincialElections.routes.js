const express = require('express');
const router = express.Router();
const data = require('../data/provicial2016.json');

/**
 * @route GET /v1/provincialElections/2016
 * @description Get 2016 provincial results in all provices
 * @access public
 */
router.get('/2016', async(req, res, next) => {
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
 * @route GET /v1/provincialElections/2016/province?name="name"
 * @description Get province municipal results by geo code
 * @access public
 */
router.get('/2016/province', (req, res, next) => {
    let province_name = req.query.name;
    try {
        data.forEach(results => {
            if (results.name == province_name) {
                return res.status(200).json({
                    results
                })
            }
            next()
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

/**
 * @route GET /v1/provincialElections/2016?name="Name of political party"
 * @description get organisation total votes per province
 * @access public
 */
router.get('/2016', async(req, res) => {
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



module.exports = router;