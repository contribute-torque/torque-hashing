torque-hashing
===============

Torque hashing functions for node.js.


Algorithms
----------
* cryptonight (v0, v1, v2, xtl, msr, rto, xao)
* yespower

Usage
-----

Install

```bash
npm install https://github.com/contribute-torque/torque-hashing.git
```

So far this native Node.js addon can do the following hashing algos

```javascript
var torqueHashing = require('torquehashing');

var algorithms = ['cryptonight' ];

var data = new Buffer("7000000001e980924e4e1109230383e66d62945ff8e749903bea4336755c00000000000051928aff1b4d72416173a8c3948159a09a73ac3bb556aa6bfbcad1a85da7f4c1d13350531e24031b939b9e2b", "hex");

var hashedData = algorithms.map(function(algo){
    return multiHashing[algo](data);
});


console.log(hashedData);

// [ <Buffer e9 7e f3 fc 03 6d 67 62 6e 54 54 7a 71 30 73 03 dc 5f a8 9b 9d f4 99 fe ea ef 9d 11 ac ad be 9b> ]

```

Credits
-------
* [XMrig](https://github.com/xmrig) - For advanced cryptonight implementations from [XMrig](https://github.com/xmrig/xmrig)
