// We first require our express package
//masterdetective123 elementarymydearwatson
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const userData = require("./users.js");
const exphbs = require("express-handlebars");
const Handlebars = require("handlebars");
const bcrypt = require("bcrypt");
const saltRounds = 16;

const handlebarsInstance = exphbs.create({
  defaultLayout: "main",
  // Specify helpers which are only registered on this instance.
  helpers: {
    asJSON: (obj, spacing) => {
      if (typeof spacing === "number")
        return new Handlebars.SafeString(JSON.stringify(obj, null, spacing));

      return new Handlebars.SafeString(JSON.stringify(obj));
    }
  }
});

const rewriteUnsupportedBrowserMethods = (req, res, next) => {
 if (req.body && req.body._method) {
    req.method = req.body._method;
    delete req.body._method;
  }
  // let the next middleware run:
  next();
};

// We create our express isntance:
const app = express();

app.use(cookieParser());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(rewriteUnsupportedBrowserMethods);
app.use(express.static(__dirname + '/public'));
app.engine("handlebars", handlebarsInstance.engine);
app.set("view engine", "handlebars");

let logedUser;
let session = userData.userData;

app.use(function authenticated(request, response, next) { 
  //console.log(request.cookies);
  if(request.cookies) {
    for(let i = 0; i < session.length; i++) {
      if(session[i]._id === request.cookies["AuthCookie"]) {
        logedUser = session[i].username;
        break;
      }   
    }
  }
  next();
});

let userMatch = async (username, password) => {
  if(!username) return Promise.reject( "Please input a vaild username. Empty username!");
  if(!password) return Promise.reject( "Please input a vaild password. Empty password!");
  for(let user of session) {
    if(user.username == username) {
            let passwordMatch = false;
            try {
                passwordMatch = await bcrypt.compare(password, user.hashedPassword);
            } catch (e) {
                // no op
            }   
            if(passwordMatch) {
                return user;
            }
            else {
                return Promise.reject( "An invalid password. Password Wrong!"); 
            }
    }
  }
  return Promise.reject("An invalid username. No such user!");
  };

app.get("/", async function(request, response, next) {
   if(logedUser !== undefined) {
      response.redirect("/private");
    }
    //If the user is not authenticated, it will render a view with a login screen for a username and password.
    else {
      response.render('login/login', {username : request.body["username"], password: request.body["password"]});
    }

});
 
//log a user in with the credentials they provide in the login form.
app.post("/login", async function(request, response, next) {
  const username = request.body["username"];
  const password = request.body["password"];
  try{
    var auser = await userMatch(username, password);
    if(auser.username === request.body.username) {
      logedUser = auser;
      const now = new Date();
      const expiresAt = new Date();
      const sessionId = auser._id;
      response.cookie('AuthCookie', sessionId, {expires: expiresAt});
      response.redirect('/private');
    }
		else {
      response.render('login/login');
      console.log("You did not provide a valid username & password.")
    }
	} catch (errorMessage) {    
		response.status(500).json({ error: errorMessage });
  }
 
});
//app.use(authenticated);
app.get("/private", async function(request, response, next) {
 if(logedUser !== undefined) {
     response.render("login/private", {user : logedUser});
    }
    else {
      response.status(403).send( "the user is not logged in" );
 
    }
 
});

//This route will expire the AuthCookie and inform the user 
//that they have been logged out. It will provide a URL to the / route.
app.get("/logout", async function(request, response) {
    logedUser = undefined;
    console.log("now clearing the cookie and logout");
    response.clearCookie("AuthCookie");
    response.redirect('/');
});

// We can now navigate to localhost:3000
app.listen(3000, function() {
    console.log("Your server is now listening on port 3000! Navigate to http://localhost:3000 to access it");
    if (process && process.send) process.send({done: true}); // ADD THIS LINE
});
