const express = require('express');
const router = express.Router();

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