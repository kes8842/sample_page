const express = require('express');
const router = express.Router();
const axios = require('axios')

const CLINET_ID = 'cWVxE2ldPxuJdAabt081'
const CLINET_SECRET = '8PZSLcMOLW'

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/papago', async (req, res) => {
  const { text, source, target } = req.query
  const api_url = 'https://openapi.naver.com/v1/papago/n2mt'
  const option = { headers: { 'X-Naver-Client-Id': CLINET_ID, 'X-Naver-Client-Secret': CLINET_SECRET } }
  const body = {
    text, source, target
  }
  try {
    const transResult = await axios.post(api_url, body, option);
    res.send(transResult?.data)
  } catch (error) {
    console.log(error)
    res.status(500)
  }
})

router.get('/', function (req, res) {
  res.send('Birds home page');
});

module.exports = router;
