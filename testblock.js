const { mineBlock } = require('./BlockChain');
const Block = require('./BlockChain');
//const BlockChain = require('./Chain');


//let blocked = new block ('1','is','this','really','working');
//console.log(blocked.toString());

//console.log(block.genesis().toString());

let nublock = Block.mineBlock(Block.genesis(),'first block');
console.log(nublock.toString());
console.log(nublock);
