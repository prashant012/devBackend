// now create server

const express = require('express');
const { adminAuth, userAuth } = require('./middleWare/auth');

const app = express();

//middlware 
//below is the adminauth middleware
app.use("/admin", adminAuth);

// we can also create some login api which don't need auth right as user is alredy login
// we dont need restriction over here
app.post("/user/login", (req, res, next) => {
    res.send('user is successfully logged in');
})

// this will only handle the get call to /user
app.get("/user", userAuth, (req, res) => {
    res.send('user is authenticated');
});

// above we are checking user and authenticating by using userAuth middleware.

// it is listenning to PORT 3000,
app.listen(3000, () => {
    console.log('serve is listening to PORT 3000 ....');
});
