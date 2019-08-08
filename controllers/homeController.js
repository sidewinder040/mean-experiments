// exports.index = function(req, res) {
//     res.send('NOT IMPLEMENTED: Site Home Page');
// };

exports.index = function(req, res) {
    res.render('home_index', { title: 'Home Route Index Page'});
}