# bitcoinbar ![bitcoinbar](http://i.imgur.com/Mf9jMia.png)

Cross-platform Electron app based on [menubar](https://github.com/maxogden/menubar) to check bitcoin price from your system menubar. It currently takes BTC price from bitstamp public API, other exchanges will be added soon.

![bitcoinbar screenshot](http://i.imgur.com/sfcn9hF.png)

## To-do list
- [x] First release source code
- [ ] Upload first release builds 
- [ ] Multiple exchanges availability w/ exchange selection
- [ ] Extra info in tabs like mining...

> Feel free to collaborate! 😉

## Dependencies and installation
bitcoinbar needs [Node.js](https://nodejs.org/) (which comes with npm) and Electron installed in your computer to run.
### Node.js
Download and install the [latest node release](https://nodejs.org/en/download/). If you already have node installed, just check that you're running the latest version with the following command:

`npm install npm -g`

### Electron
Electron Prebuilt binaries and debug symbols of Electron for Linux, Windows and macOS can
be found on the [releases](https://github.com/electron/electron/releases) page.

You can also use [`npm`](https://docs.npmjs.com/) to install prebuilt electron binaries:

```sh
# Install the `electron` command globally in your $PATH
npm install electron -g

# or install as a development dependency
npm install electron --save-dev
```

## Run bitcoinbar
```sh
# Extract downloaded Github zip file and enter folder
cd pathToDownloadFolder/bitcoinbar-master
electron .
```
That's it!

## License

MIT License

Copyright (c) 2016 

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.