var Web3 = require('web3');
var web3 = new Web3(Web3.givenProvider || process.env.WEB3_HOST);
var transactionDataService = require('./transactionDataService');
var tokenDataService = require('./tokenDataService');
var moment = require('moment');

module.exports = {
    getAddressData: async function(address) {

        address = address.toLowerCase();

        var balance = await web3.eth.getBalance(address);

        var transactions = await transactionDataService.getTransactions(address);

        var transactionCount = await transactionDataService.getTransactionCount(address);
        var ethUsdPrice = await tokenDataService.getPrice("ETH");

        return {
		address: address
		, ethBalance: balance
		, ethUsdPrice: ethUsdPrice
		, tokens: [
			{name: "token1", amount: 222}
			, {name: "token2", amount: 444}
		]
		, transactions: transactions
        , transactionCount: transactionCount 
        , isContract: await isContract(address)
	};
  },
  getTransactionData: async function (transaction) {

      transaction = transaction.toLowerCase();

      var data = await transactionDataService.getTransaction(transaction);

      if (data == null) {
        return null;
      }

    return {
		hash: data.hash
		, status: ''
		, block: data.block
		, utcTime: data.utctime
		, fromAddress: data.fromaddress
		, toAddress: data.toaddress
		, amount: data.value
        , fee: data.fee
	}
  },
  getBlockData: async function (block) {
      var data = await web3.eth.getBlock(block);

      if (data == null) {
        return null;
      }

      return {
          blockNumber: data.number
          , localTime: new Date(data.timestamp*1000)
          , timeAgo: moment(new Date(data.timestamp*1000)).fromNow()
          , difficulty: data.difficulty
          , extraData: data.extraData
          , gasLimit: data.gasLimit
          , gasUsed: data.gasUsed
          , hash: data.hash
          , miner: data.miner
          , nonce: data.nonce
          , parentHash: data.parentHash
          , sha3Uncles: data.sha3Uncles
          , size: data.size
          , totalDifficulty: data.totalDifficulty
          , transactionCount: data.transactions.length
      }
  },
  getBlockTransactionData: async function(block) {
      var data = await web3.eth.getBlock(block, true);

      if (data == null) {
        return null;
      }

      return data.transactions
  },
  addressIsContract: async function(address) {
      return isContract(address);
  },
  getLatestBlock: async function() {
      var latestBlock = await web3.eth.getBlockNumber();
      return latestBlock;
  },
  getRecentBlocks: async function(count) {
      var latestBlock = await web3.eth.getBlockNumber();
      var blockData = [];
      for (var i = latestBlock; i >= latestBlock - count; i--)
      {
          var thisData = await this.getBlockData(i);
          blockData.push(thisData);
      }
      for (var i = 0; i < blockData.length - 1; i++)
      {
          blockData[i].timeToMine = blockData[i].localTime - blockData[i+1].localTime;
      }
      blockData.pop();
      return blockData;
  }
};

async function isContract(address) {
    var code = await web3.eth.getCode(address);

    return code.length > 2;
}
