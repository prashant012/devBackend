const express = require('express');
const app = express();


app.get('/getUserData', (req, res) => {
    try {
        // logic of DB can get usre data it might fail 
        throw new Error("Error occured 111");
       res.send("user Data sent");
    } catch(err) {
       res.status(500).send('soem error occured');
    }
})

app.use("/", (err, req, res, next) => {
    if(err) {
        // log your error
        res.status(500).send('something went wrong');
    }
})



// it is listenning to PORT 3000,
app.listen(3000, () => {
    console.log('serve is listening to PORT 3000 ....');
});
