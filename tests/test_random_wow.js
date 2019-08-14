"use strict";
let multiHashing = require('../build/Release/cryptonight-hashing');

let result = multiHashing.randomx(Buffer.from('Wow this is amazing'), Buffer.from('0000000000000000000000000000000000000000000000000000000000000000', 'hex')).toString('hex');
if (result == 'c60c17ef9eeea1e9905a5ee54df11d882f86c028802b8a091fe1419172ed6d0c')
	console.log('RandomWOW test passed');
else
	console.log('RandomWOW test failed: ' + result);

