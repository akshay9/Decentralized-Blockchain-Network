const Blockchain = require('./blockchain')

const bitcoin = new Blockchain();
/**
 * Testing the create block method with dummy data-set
 */
const previousBlockHash = "prevBlockHash";
const currentBlockData = [
    {
        amount: 10,
        sender: 'sender1',
        recipient: 'recipient1'
    },
    {
        amount: 20,
        sender: 'sender2',
        recipient: 'recipient2'
    },
    {
        amount: 30,
        sender: 'sender3',
        recipient: 'recipient3'
    },
];
const nonce = 100;

console.log(bitcoin.hashBlock(previousBlockHash,currentBlockData,nonce));