function Blockchain() {
    // constructor function, called as soon as this blockchain.js is called 
    // blocks that we create or mine will be stored in this chain array 
    this.chain = [];
    // we will hold all the new transactions here before pushing it to the block and mined 
    this.newTransactions = [];
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
        transactions = this.newTransactions, // this will put all the transaction in newTransaction array
        nonce = nonce,
        hash: hash,
        previousBlockHash = previousBlockHash

    };
    /**
     * we do this once we create a new block, we put all of the new transaction in this block
     * so we want to clear out newTransactions array so that we can start over for new block
     */
    this.newTransactions = [];
    // this takes the new block and pushes to the chain in chain array
    this.chain.push(newBlock);
    return newBlock;
}