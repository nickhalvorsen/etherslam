var Web3 = require('web3');
var web3 = new Web3(Web3.givenProvider || "http://127.0.0.1:18545");
var transactionDataService = require('./transactionDataService');
var tokenPriceDataService = require('./tokenPriceDataService');

module.exports = {
    getAddressData: async function(address) {
        
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
	};
  },
  getTransactionData: function (transaction) {
    return {
		hash: transaction
		, status: 'success'
		, block: '414232'
		, testTimeStamp: '04:30 44/33/22'
		, fromAddress: '0x320478962039486723423435566'
		, toAddress: '0x039987098d70987394872395873'
		, amount: '30.44'
	}
  }
};
