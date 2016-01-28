/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  createUser: function(req, res) {

    User.create({
      name: req.param('name')
    }).exec(function(err, createdUser){

      return res.json({
        name: createdUser.name
      });
    })
  },

  resetPassword: function(req, res) {

    if (req.session.userId === 1) {

      req.session.password = "123456";

      return res.json({
        message: 'password set to: ' + req.session.password
      })
    }

    return res.json({
      message: 'not a valid session!'
    })
  },

  changePassword: function(req, res) {

    if (req.session.userId===1){

      console.log('userId: ', req.session.userId);

      req.session.password = 'hacker!';
    
      return res.redirect('https://csrftokenoff.herokuapp.com/user/showPassword');
    }

      return res.redirect('https://csrftokenoff.herokuapp.com/unsuccessful');
  },

  showPassword: function(req, res) {

    console.log('req.session.passsword: ', req.sesssion.password);

    req.session.password = req.session.password || "";

    return res.view('show-password', {
      password: req.session.password
    });
  },

  login: function(req, res) {

    //Establish session
    req.session.userId = 1;

    return res.json({
      userId: req.session.userId
    });
  },

  logout: function(req, res) {

    req.session.userId = null;

    return res.json({
      userId: req.session.userId
    });
  },

  otherEndpoint: function(req, res) {

    return res.json({
      userId: req.session.userId
    });    
  }
	
};

