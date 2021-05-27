let SHA256 = require('crypto-js/sha256')

 //Here we are making a block and storing some data into it

class Block {
    
//you can add as many property to the block 
    constructor( timestamp,data, prevHash,Hash) {
        
        this.timestamp = timestamp;
        this.data = data;
        this.Hash = this.getHash();
        this.prevHash = prevHash;
        this.nonce = 0;
    }
   getHash(){
       return SHA256(this.timestamp+this.prevHash+this.nonce+JSON.stringify(this.data)).toString()
   }
   mineBlock(difficulty){
       while (this.Hash.substr(0,difficulty) !== Array(difficulty+1).join('0')) {
           this.nonce++
           this.Hash = this.getHash();
           
       }
   }
}
//This part is to add new block and make chain of it
class BlockChain {
    constructor() {
        this.chain = [this.genesisBlock()]
        this.difficulty = 3;
        
    }
    //This is the mock block to take as first ever block
    genesisBlock(){
        return new Block ('01/04/20','Hello world',0)
    }
    getlastblock(){
      return  this.chain[this.chain.length-1];
    }
    addnewblock(newblock){
        newblock.timestamp = Date.now()
        newblock.prevHash = this.getlastblock().Hash;
       newblock.mineBlock(this.difficulty);
        this.chain.push(newblock);

    }
    isChainValid(){
        for (let i = 1; i < this.chain.length; i++) {
            const currentblock = this.chain[i];
            const lastblock = this.chain[i-1];

            if(currentblock.Hash != currentblock.getHash()){
               return false;
            }
            if(currentblock.prevHash != lastblock.Hash){
                return false;
            }
        }
        return true;
    }
   

}
//Adding new blocks below..........
let dash = new BlockChain();
console.log('mining Block 1...../...');
dash.addnewblock(new Block('','here we go again'))
console.log('mining Block 2...../...');
dash.addnewblock(new Block('','coin:10'))
console.log(dash);
console.log(dash.isChainValid());
