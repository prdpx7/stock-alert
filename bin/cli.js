#!/usr/bin/env node
'use strict'
const stockAlert = require('../index.js')
const notifier = require('node-notifier')
const secrets = require("./secrets")
const BgRed = "\x1b[41m"
const BgGreen = "\x1b[42m"
const FgRed = "\x1b[31m"
const FgGreen = "\x1b[32m"
const ResetTerminalColor = '\x1b[0m'
const NIFTY = /nifty/i
const SENSEX = /sensex/i
const DOWJONES = /dow\w*/i
const NASDAQ = /nas\w*/i

const POPULAR_EXCHANGES = ["NIFTY", "SENSEX", "DOWJONES", "NASDAQ"]

function getExchangeName(exchangeName) {
    if (exchangeName.match(SENSEX)) {
        return "SENSEX"
    } else if (exchangeName.match(NASDAQ)) {
        return "NASDAQ"
    } else if (exchangeName.match(DOWJONES)) {
        return "DOWJONES"
    }
    return "NIFTY"
}
function showAlert(exchangeName, isDesktopNotification) {
    // console.log(exchangeName)
    stockAlert(exchangeName).then((resp) => {
        let data = resp.data
        let icon = data.CHANGE > 0 ? `▲` : `▼`;
        let dataChange = data.CHANGE > 0 ? `+${data.CHANGE}` : `${data.CHANGE}`
        let coloredCHANGE = data.CHANGE > 0 ? `${FgGreen}+${data.CHANGE}${ResetTerminalColor}` : `${FgRed}${data.CHANGE}${ResetTerminalColor}`
        var opts = {
            'title': exchangeName,
            'message': isDesktopNotification ? `${data.pricecurrent}  ${dataChange}  ${Math.abs(data.PERCCHANGE)}% ${icon}` : `${data.pricecurrent}  ${coloredCHANGE} ${Math.abs(data.PERCCHANGE)}%`
        }
        if (isDesktopNotification) {
            notifier.notify(opts)
        } else {
            console.log(opts.title);
            console.log(opts.message);
            console.log("\n")
        }

    }, (err) => {
        console.log(err)
    })
}
function cliRunner() {
    if (process.argv.indexOf("help") != -1) {
        console.log('\n   Usage: stock-alert <command>')
        console.log('\nExamples:\n')
        console.log('$ stock-alert desktop # for desktop notification for nifty\n')
        console.log('$ stock-alert dow # for DOWJONES')
        console.log('$ stock-alert nasdaq # for NASDAQ')
        console.log('$ stock-alert sensex # for SENSEX')
        console.log('$ stock-alert # default will give results on cli for exchanges \n')
        console.log('$ stock-alert help # show this help msg\n')
    }
    else {
        let notifyViaDesktop = process.argv.indexOf("desktop") != -1
        // console.log(process.argv)
        let showAllExchanges = process.argv.length === 2 || process.argv.indexOf("all") != -1
        if (showAllExchanges) {
            POPULAR_EXCHANGES.forEach(exchange => showAlert(exchange));
        }
        else if (notifyViaDesktop) {
            let args = process.argv
            args.pop("desktop")
            for (let i = 2; i < args.length; ++i) {
                let exchangeName = getExchangeName(args[i]);
                showAlert(exchangeName, true)
            }

        } else {
            for (let i = 2; i < process.argv.length; ++i) {
                let exchangeName = getExchangeName(process.argv[i]);
                showAlert(exchangeName)
            }
        }
    }
    secrets()
}
cliRunner();



