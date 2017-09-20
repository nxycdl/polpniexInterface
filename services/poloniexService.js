/**
 * Created by dl on 2017-09-20.
 */
const poloniexService = {
    async get(url){
        return await G.request({
            uri: url, mothod: 'get'
        });
    }
}

module.exports = poloniexService;