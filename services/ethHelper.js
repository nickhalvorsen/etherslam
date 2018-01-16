var Web3 = require('web3');
var web3 = new Web3(Web3.givenProvider || process.env.WEB3_HOST);
var transactionDataService = require('./transactionDataService');
var tokenPriceDataService = require('./tokenPriceDataService');

module.exports = {
    getAddressData: async function(address) {

        address = address.toLowerCase();

        var balance = await web3.eth.getBalance(address);

        var transactions = await transactionDataService.getTransactions(address);

        var ethUsdPrice = await tokenPriceDataService.getPrice("ETH");

        return {
		address: address
		, ethBalance: balance
		, ethUsdPrice: ethUsdPrice
		, tokens: [
			{name: "token1", amount: 222}
			, {name: "token2", amount: 444}
		]
		, transactions: transactions
        , isContract: isContract(address)
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
          , utctime: data.timestamp
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
  }
};

async function isContract(address) {
    var code = await web3.eth.getCode(address);

    return code.length > 2;
}
