$(document).ready(function(){

  $('#loginButton').click(function(){

    $.post( "/user/login", function( data ) {
    console.log('session is: ', data.userId);
    });
  });

  $('#differentEndpoint').click(function(){

    $.get('/user/otherEndpoint', function( data ) {
      console.log('session is: ', data.userId);
    });
  });

  $('#resetPassword').click(function(){

    $.post( "/user/resetPassword", function( data ) {
    console.log('message is: ', data.message);
    });
  });

  $('#changePassword').click(function(){

    $.post( "/user/changePassword", function( data ) {
    console.log('message is: ', data.message);
    });
  });

  $('#badLink').click(function(){

    window.location = "https://badsite.herokuapp.com"
  });
});