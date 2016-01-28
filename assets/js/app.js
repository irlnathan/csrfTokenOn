$(document).ready(function(){

  var _csrf;
  $.get('/csrfToken', function( data ) {
    _csrf = data._csrf;
    console.log('the csrf token is: ', data);
  });  

  $('#loginButton').click(function(){

    $.ajax({
      url: '/user/login',
      type: 'POST',
      data: { 
        _csrf: _csrf
      },
      success: function(result){
        console.log('result: ', result);
      },
      error: function(xhr, status, err){
        console.log(err);
      }
    });
  });

  $('#differentEndpoint').click(function(){

    $.get('/user/otherEndpoint', function( data ) {
      console.log('session is: ', data.userId);
    });
  });

  $('#resetPassword').click(function(){

    $.ajax({
      url: '/user/resetPassword',
      type: 'POST',
      data: { 
        _csrf: _csrf
      },
      success: function(data){
        console.log('message is: ', data.message);
      },
      error: function(xhr, status, err){
        console.log(err);
      }
    });
  });

  $('#changePassword').click(function(){

    $.post( "/user/changePassword", function( data ) {
    console.log('message is: ', data.message);
    });
  });

  $('#badLink').click(function(){

    window.location = "https://badsite.herokuapp.com/csrftokenon"
  });
});