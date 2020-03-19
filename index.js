'use strict'
const https = require('https')
const paths = {
    "NIFTY": "/pricefeed/notapplicable/inidicesindia/in%3BNSX",
    "SENSEX": "/pricefeed/notapplicable/inidicesindia/in%3BSEN",
    "NASDAQ": "/pricefeed/notapplicable/indicesglobal/us%3BCOMP",
    "DOWJONES": "/pricefeed/notapplicable/indicesglobal/US%3Bdji"
}
const options = {
    host: 'priceapi.moneycontrol.com',
    port: 443,
    headers: {
        'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36'
    },
    method: 'GET'
}
const stockAlert = (exchangeName) => {
    let path = paths[exchangeName]
    let headers = options
    headers["path"] = path
    return new Promise((resolve, reject) => {
        https.get(headers, (resp) => {
            resp.on('data', (data) => {
                resolve(JSON.parse(data))
            })
        }).on('error', (err) => {
            reject(err)
        })
    })
}
module.exports = stockAlert;