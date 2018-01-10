
exports.index = async function(req, res) {
    res.render('noSearchResults', { searchQuery: req.query.s });
};
