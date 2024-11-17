- exploring routing and use of ?, +, (), * in the routes.
- /user/ab?c - her ? is after 'b' so b char is optional user can include or leave it
- /ab+c  - here a, c will be fixed and 'b' can come n number of times.
- /a(bc)?d or /a(bc)+d - for first bc wil be optional & in 2nd bc can come any number of times.
- /a/ this is a regex pattern if /abc/ or /car/ or anything come it will work.    
- /.*fly$/ anything start with anything but end with fly it match the url
- order of route handler matter a lot
- e.g. app.use('/user', () => {}) it will match all and send the response.
- query paramas is also there
- /user?userid=101
- we can achieve it by using req.query
- how to handle the dynamic routes
- /user/:userid -- req.params
- /user/:userid/:passowrd/:add/:city -- by this we can make it more complex and dynamic more

- multiple route handlers - play with them
- next()
- next function & routes along with res.send();
- app.use('/route', rH, [nH2, rH3], nH4, nH5);
- what is a middleware?
- how express JS  basically handlers  request behind the scene?
- it will keep on going to middleWare and middle ware till it is sending the response. 
- which is actually sending the response back.

app.use('/', (req, res, next) => {
// res.send("handling the route");
next();
});

app.get("/user", (req, res, next) => {
	console.log('handling the /user route');
next();
},
(req, res, next) => {
	console.log('handling the /user route');
next();
},
(req, res, next) => {
	console.log('handling the /user route');
next();
},
(req, res, next) => {
	console.log('handling the /user route');
res.send('hello from the server');
}
);

- why we need middleware?
- by using middleware we can customised our call chain or req to server before its even executing
- we can authenticate the user 

