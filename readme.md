# stock-alert
> get NIFTY price on cli or desktop notification

## Installation
```
npm install -g stock-alert
```
## Usage
```
Usage: stock-alert <command>

Examples:

$ stock-alert desktop # for desktop notification

$ stock-alert # default will give results on cli

$ stock-alert help # show this help msg
```
## Tip
 * You could create a cronjon like this:
```
# m     h        dom  mon  dow   commmand
  */30  10-15   *    *   1-5   stock-alert desktop

# run in every thirty mintute b/w 10am to 3pm from monday to friday
```
## Demo
![snap](https://i.imgur.com/UXEN5UC.png)
## License
[MIT](https://github.com/prdpx7/stock-alert/blob/master/LICENSE)