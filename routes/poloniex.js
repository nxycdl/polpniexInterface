/**
 * Created by dl on 2017-09-20.
 */
const router = require('koa-router')()
var poloniexService = require('../services/poloniexService')

router.prefix('/poloniex')

router.get('/returnTicker', async (ctx, next) => {
    //ctx.body = 'this is a users returnTicker!'
    var url = 'https://poloniex.com/public?command=returnTicker';
    //var url = 'http://api.chbtc.com/data/v1/ticker?currency=bts';
    var data = await  poloniexService.get(url);
    console.log(data);
    var outdata ={
        code:data.statusCode,
        body:data.body,
    }
    ctx.body = outdata;
})


module.exports = router