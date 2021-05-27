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