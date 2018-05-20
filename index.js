'use strict'
const https = require('https')
const options = {
    host: 'priceapi.moneycontrol.com',
    path:'/pricefeed/notapplicable/inidicesindia/in%3BNSX',
    port:443,
    headers:{
        'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36'
    },
    method:'GET'
}
const stockAlert = () => {
    return new Promise((resolve, reject) => {
        https.get(options, (resp) => {
            resp.on('data', (data) => {
                resolve(JSON.parse(data))
            })
        }).on('error', (err)=>{
            reject(err)
        })
    })
}
module.exports = stockAlert;