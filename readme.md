# stock-alert
> A Node API (and a CLI) for Live notification on NIFTY, SENSEX, NASDAQ, DOWJONES Indices.

## Installation
```
npm install -g stock-alert
```
## Usage

* Command Line Interface
```
stock-alert <command>
Examples:

$ stock-alert desktop # for desktop notification for nifty

$ stock-alert dow # for DOWJONES
$ stock-alert nasdaq # for NASDAQ
$ stock-alert sensex # for SENSEX
$ stock-alert nifty # for NIFTY
$ stock-alert # default will give results on cli for exchanges 

$ stock-alert help # show this help msg
```
* API
```
const stockAlert = require("stock-alert)
/*
Available exchanges : NIFTY, SENSEX, DOWJONES, NASDAQ
*/

stockAlert("NIFTY).then(resp => {
    console.log(resp.data);
    /*
        {   
            HIGH: '8575.45',
            decl: 42,
            ty: '5',
            '1mthCh': '-3523.700',
            HN: null,
            cl1wDt: '2020-03-13',
            cl5yDt: '2015-03-19',
            YTD: -32.09118663428785,
            cl5yPerChange: '-4.3000',
            cl1yPerChange: '-28.3500',
            cl3yVal: '9126.85',
            '1yr': '-26.100',
            cl3mVal: '12262.75',
            '3yr': '-7.200',
            ...
            ...
            ...
        }
    */
});
```
## Tip
 * You could create a cronjob like this:

```
$ which stock-alert # it will give path of executable file
$ crontab -e # command for opening crontab config
# m     h        dom    mon      dow        commmand
  */30  10-15     *      *       1-5    /path/to/stock-alert nifty desktop

# run in every thirty mintute b/w 10am to 3pm from monday to friday
```
## Demo
![snap](https://i.imgur.com/NrcYfgx.png)
## License
[MIT](https://github.com/prdpx7/stock-alert/blob/master/LICENSE)