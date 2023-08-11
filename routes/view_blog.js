var express = require('express');
var router = express.Router();
var db = require('../database')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('view_page', { title: 'Read Blog' });
});

router.post('/read_blog', function (req, res, next) {
  var title = req.body.title
  var email = req.body.email

//   db.query(`SELECT title, email, blogcontent FROM blog WHERE email = "${email}" and title = "${title}"` , function (err, rows) {
//   if (err) {
//     //   req.flash('error', err)
//       res.render('show_blog', { data: '' })
//   } else {
//       res.render('show_blog', { data: rows })
//   }
//   })
//   })
  db.query(`SELECT title, email, blogcontent FROM blog WHERE email = "${email}" and title = "${title}"` , function (err, rows) {
  if (err) {
    //   req.flash('error', err)
      res.render('show_blog', { data: '' })
  } else {
      res.render('show_blog', { data: rows })
  }
  })
  })
  module.exports = router;