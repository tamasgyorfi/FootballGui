import React from 'react'

const isUserLoggedIn = (handler) => {
  var loggedIn = false
  window.fbAsyncInit = function () {

    window.FB.init({
      appId: '358826904512830',
      cookie: true,
      xfbml: true,
      version: 'v3.0'
    });
    
    console.log('Facebook sdk loaded.')

    window.FB.getLoginStatus(function (response) {
      console.log(response)
      if (response.status === 'connected') {
        loggedIn = true;
      }


      handler(loggedIn);
    }.bind(this));
  }.bind(this);

  (function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0&appId=358826904512830&autoLogAppEvents=1';
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

}

export default isUserLoggedIn;