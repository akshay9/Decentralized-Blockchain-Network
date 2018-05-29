const Blockchain = require('./blockchain')

const bitcoin = new Blockchain();
/**
 * Testing the create block method with dummy data-set
 */
bitcoin.createNewBlock(222, 'prev1', 'hash1')
bitcoin.createNewTransaction(100, "Sender1", "Recipient1");
bitcoin.createNewBlock(200, 'prev2', 'hash2')
bitcoin.createNewTransaction(200, "Sender2", "Recipient2");
bitcoin.createNewTransaction(300, "Sender3", "Recipient3");
bitcoin.createNewTransaction(400, "Sender4", "Recipient4");
bitcoin.createNewBlock(300, 'prev3', 'hash3')

console.log(bitcoin);