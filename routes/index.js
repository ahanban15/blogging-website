var express = require('express');
var router = express.Router();
var db = require('../database')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Writing a Blog' });
});

router.post('/blog_entry', function (req, res, next) {
  var title = req.body.title
  var email = req.body.email
  var blogcontent = req.body.blogcontent
  var sql = `INSERT INTO blog (title, email, blogcontent) VALUES ("${title}", "${email}", "${blogcontent}")`
  
  db.query(sql, function (err, result) {
    if (err) throw err
    console.log('Row has been updated')
    // req.flash('success', 'Data stored!')
    res.redirect('/view_blog')
  })
})

module.exports = router;
