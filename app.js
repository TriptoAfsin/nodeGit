const express = require('express')

const app = express();

const http = require('http')



//const cors = require('cors');

//app.use(cors( { origin:true}));


app.get('/', (req, res) =>{

    res.status(200).send('<p style="text-align:center; font-size:80px"><b>Welcome to demo api</b><br><a href="/api">API List</a></p>');


});

app.get('/api', (req, res) =>{

    res.status(200).send('<p style="text-align:left; font-size:40px"><b>API Lists</b><br>*<a href="/api/randomNum">Random Number generator</a><br>*<a href="/hello-world">Hello world</a>');


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

//for hosting env

const port = process.env.PORT || 3000;

app.listen(port, ()=> console.log("Listening on port "+ port+"......"));




