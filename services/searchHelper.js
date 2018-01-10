module.exports = {
    looksLikeAddress: function(str) {
        var addressRe = /^0x[0-9A-Fa-f]{40}$/;
        var matched = str.match(addressRe);
        return matched != null;
    }
    , looksLikeTransactionHash: function(str) {
        var transactionRe = /^0x[0-9A-Fa-f]{64}$/;
        var matched = str.match(transactionRe);
        return matched != null;
    }
    , looksLikeBlockNumber: function(str) {
        var blockRe = /^\d+/;
        var matched = str.match(blockRe);
        return matched != null;
    }
}
