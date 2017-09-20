/**
 * Created by dl on 2017-09-20.
 */
const router = require('koa-router')()
router.prefix('/poloniex')

router.get('/returnTicker', function (ctx, next) {
    ctx.body = 'this is a users returnTicker!'
})


module.exports = router