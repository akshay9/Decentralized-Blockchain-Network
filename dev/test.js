const Blockchain = require('./blockchain')

const bitcoin = new Blockchain();
/**
 * Testing the create block method with dummy data-set
 */
bitcoin.createNewBlock(222,'prev1','hash1')
bitcoin.createNewBlock(23332,'prev2','hash2')
bitcoin.createNewBlock(222222,'prev3','hash3')

console.log(bitcoin);