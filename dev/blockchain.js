function Blockchain() {
    // constructor function, called as soon as this blockchain.js is called 
    // blocks that we create or mine will be stored in this chain array 
    this.chain = [];
    // we will hold all the new transactions here before pushing it to the block and mined 
    this.pendingTransactions = [];

}
Blockchain.prototype.createNewBlock = function (nonce, previousBlockHash, hash) {
    /**
     * We will create a prototype function for creating new blocks while transaction
     * it will take 3 @params
     * @nonce -> 
     * comes from proof of work (it is just a number). 
     * It is pretty much a proof that we created a new block in a legit way by creating proof of work algo
     * @previousBlockHash ->
     * this is hash of previous block which we are attaching too
     * @hash ->
     * it is data from our new block. we pass our a transactions into a hashing fuction . 
     * all of our transaction will be compressed into Hash
     */
    const newBlock = {
        /* new block object, this is going to be a block in our blockchain
         * all data we going to need will be stored inside this newBlock
         */
        index: this.chain.length + 1, //block number in our chain
        timestamp: Date.now(), // when the block was created
        transactions: this.pendingTransactions, // this will put all the transaction in newTransaction array
        nonce: nonce,
        hash: hash,
        previousBlockHash: previousBlockHash

    };
    /**
     * we do this once we create a new block, we put all of the new transaction in this block
     * so we want to clear out pendingTransactions array so that we can start over for new block
     */
    this.pendingTransactions = [];
    // this takes the new block and pushes to the chain in chain array
    this.chain.push(newBlock);
    return newBlock;
}
/**
 * This would be used to return the last hash of last block address
 */
Blockchain.prototype.getLastBlock = function () {
    return this.chain[this.chain.length - 1]
}

/**
 * 
 * @amount -> the nonuce of the trasnaction / the amount being send
 * @sender -> senders address
 * @recipient -> recipinet address
 */
Blockchain.prototype.createNewTransaction = function (amount, sender, recipient) {
    const newTransaction = {
        //object
        amount: amount,
        sender: sender,
        recipient: recipient
    };
    this.pendingTransactions.push(newTransaction);
    // this.getLastBlock()['index'] is last block in the chain
    return this.getLastBlock()['index'] + 1;
};

/*
 * Exporting the Blockchain Constructor function 
 */
module.exports = Blockchain;