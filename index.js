  
const express = require("express");
const mongoose = require("mongoose"); 

const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/projetoapi", {
  useNewUrlParser: true
});

const routes = require("./src/routes");

app.use(routes);

app.use('/', async(req, res) =>{
    res.redirect("/cadastrar")
}

)

const port = process.env.port || 3000

app.listen(port, (err) => {
    if(err){
        console.log('error:', err)
    }else{
        console.log('projeto rodando')
    }
})