// now create server

const express = require('express');

// this is the instance of the express application.
// this is creaeting the new web server using express.

const app = express();

// we have to crreate request handler
app.use((req, res) => {
    res.send('hello from the server....');
})

//above handler is like for all those req it will send 'hello from the server' as we not configure for some route

// it is listenning to PORT 3000,
app.listen(3000, () => {
    console.log('serve is listening to PORT 3000 ....');
});

// above we hve crrated a server which is listening to port 3000. here it is not doing anything
// now we have to listen to some port app.listen(PORT, () => {}) this CB will only be executing when 
// it iwill only be called when your server up and running
