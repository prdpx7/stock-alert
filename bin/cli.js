#!/usr/bin/node
'use strict'
const stockAlert = require('../index.js')
const notifier = require('node-notifier')
var initStockAlert = stockAlert();

initStockAlert.then((resp)=>{
    var data = resp.data
    var icon = data.CHANGE > 0 ? '▲' : '▼'; 
    var opts = {
        'title':'NIFTY Alert',
        'message':`${data.pricecurrent}  ${data.CHANGE} ${Math.abs(data.PERCCHANGE)}% ${icon}`
    }
    if(process.argv.length === 2){
        console.log(opts.title)
        console.log(opts.message)
    }
    else if(process.argv.length > 1 && process.argv[2] === 'desktop'){
        notifier.notify(opts)
    }
    else if(process.argv.length > 1 && process.argv[2] === 'help'){
        console.log('\n   Usage: stock-alert <command>')
        console.log('\nExamples:\n')
        console.log('$ stock-alert desktop # for desktop notification\n')
        console.log('$ stock-alert # default will give results on cli\n')
        console.log('$ stock-alert help # show this help msg\n')
    }
    else{
        console.log('\nsee stock-alert help for more info\n')
    }
},(err)=>{
    console.log(err)
})

