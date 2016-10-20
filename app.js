//Google Sign In
$( document ).ready(function() {
  var googleUser = {};

    var startApp = function() {
      gapi.load('auth2', function(){
        // Retrieve the singleton for the GoogleAuth library and set up the client.
        auth2 = gapi.auth2.getAuthInstance({
          client_id: '480535686459-1cn1iqo3np6uf08n9o5nmdto4vcm9pls.apps.googleusercontent.com',
          cookiepolicy: 'none',
          // Request scopes in addition to 'profile' and 'email'
          //scope: 'additional_scope'

        });
         renderButton();
        console.log(document.getElementById('mysignin2'));
        //attachSignin(document.getElementById('mysignin2'));
      });
    };

    function attachSignin(element) {
      auth2.attachClickHandler(element, {},
        function(googleUser) {
          document.getElementById('name').innerText = "Signed in: " +
                googleUser.getBasicProfile().getName();
          }, function(error) {
            alert(JSON.stringify(error, undefined, 2));
          });
    }

    function onSuccess(googleUser) {
      var profile = googleUser.getBasicProfile();
      gapi.client.load('plus', 'v1', function () {
          var request = gapi.client.plus.people.get({
              'userId': 'me'
          });

          //Display the user details
          request.execute(function (resp) {
              var profileHTML = '<div class="profile"><div class="head">Welcome '+resp.name.givenName+'! <a href="javascript:void(0);" onclick="signOut();">Sign out</a></div>';
              profileHTML += '<img src="'+resp.image.url+'"/><div class="proDetails"><p>'+resp.displayName+'</p><p>'+resp.emails[0].value+'</p><p>'+resp.gender+'</p><p>'+resp.id+'</p><p><a href="'+resp.url+'">View Google+ Profile</a></p></div></div>';
              $('.userContent').html(profileHTML);
              $('.gsignin').slideUp('slow');
          });
      });
  }

  function onFailure(error) {
      alert(error);
      $(".AfterLogin").hide();
  }

  function renderButton() {
      gapi.signin2.render('mysignin2', {
          'scope': 'profile email',
          'width': 240,
          'height': 50,
          'longtitle': true,
          'theme': 'dark',
          'onsuccess': onSuccess,
          'onfailure': onFailure
      });
  }

  function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());
    
    //Stuff I've Tried Here
    //$(".AfterLogin").css({"display", "block"});
    //$(".AfterLogin").show();
  }

  function onSuccess(googleUser) {
    console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
    $(".hello").html("Welcome: " + googleUser.getBasicProfile().getName());
    //Stuff I've Tried Here, also on css stylish-portfolio line 12
    //$(".AfterLogin").css({"display", "block"});
    //if(googleUser){$(".AfterLogin").show();}
    console.log("I'm Here");
    $(".AfterLogin").show();
    $("#mysignin2").hide();
    $(".text-vertical-center2").hide();
    $(".searchResults").hide();
    $("#pageFooter1").hide();
    //$(".AfterLogin").css({"visibility", "visible"});
    //$(".Login").hide();
    }

    function onFailure(error) {
    console.log(error);
    //$(".AfterLogin").hide();
    }



    var People = [
  {
    username: "Tiffany",
    password: "coding"
  },
  {
    username: "Jennifer",
    password: "coding"
  }
    username: "Walid",
    password: "coding"
  }
  {
    username: "Kevin",
    password: "coding"
  }
]


function getInfo(){
  var username = document.getElementById("username").value
  var password = document.getElementById("password").value
  console.log("You are logged in as" + username);

  for(i = 0; i < People.length; i++){
    if (username == People[i].username && password == People[i].password) {
      console.log(username + "is logged in.")
    }
  }
}
