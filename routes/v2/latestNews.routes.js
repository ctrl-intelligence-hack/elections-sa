const router = require("express").Router();
const axios = require("axios");

const TWITTER_BEARER_TOKEN = process.env.TWITTER_BEARER_TOKEN;

/**
 * @route GET /v2/latest_news
 * @description Get latest tweets from IEC tweet acount
 * @access public
 */
router.get("/", (req, res) => {
    var config = {
        method: "get",
        url: "https://api.twitter.com/2/users/247261462/tweets",
        headers: { Authorization: `Bearer ${TWITTER_BEARER_TOKEN}` },
    };

    axios(config)
        .then(function(response) {
            let tweets = response.data.data;
            res.status(200).json({
                tweets,
                success: true
            })
        })
        .catch(function(error) {
            res.status(500).json({
                message: 'Something went wrong',
                success: false
            })
        });
});

module.exports = router;