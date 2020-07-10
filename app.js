const express = require('express')

const app = express();

const http = require('http')



//const cors = require('cors');

//app.use(cors( { origin:true}));


app.get('/', (req, res) =>{

    res.send("Welcome to demo api");


});


app.get('/hello-world', (req, res) => {
    return res.status(200).send('<p style="text-align:center; font-size:80px"><b>Hello World</b></p>')
    });  //get route
  
  
app.get('/api/randomNum', (req, res)=> {
    (async () => {
  
        try{
  
            let myNum = String(Math.floor(Math.random()*100))
            
            return res.status(200).send(myNum);
  
        }catch(error){
            console.log(error);
            return res.status(500).send(error);
            
        }
  
    })();
});



app.listen(3000, ()=> console.log("Listening on port 3000...."));




