var Web3 = require('web3');
var web3 = new Web3(Web3.givenProvider || "http://127.0.0.1:18545");


module.exports = {
    getAddressData: async function (address) {
        
        var balance = await web3.eth.getBalance(address);

        return {
		address: address
		, ethBalance: balance
		, ethBalanceUsdEquivalent: 999
		, ethUsdPrice: 999
		, tokens: [
			{name: "token1", amount: 222}
			, {name: "token2", amount: 444}
		]
		, recentTransactions: [
			{ hash: "0x234234", from: "0x111ss2", to: "0x434991", amount: "349"}
			, { hash: "0x4848d", from: "0x111ss2", to: "0xdsrds", amount: "64"}
		]
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