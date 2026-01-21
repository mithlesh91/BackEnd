let express = require("express")

let ex = express();

ex.get('/', function (req, res) {
    res.send("hello world")
})

ex.get('/about',(req,res)=>{
    res.send("hello mithlesh kase ho")
})
ex.listen(3000);