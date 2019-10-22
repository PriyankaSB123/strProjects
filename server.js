const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const path = require('path');
const cors = require('cors');
const config=require('./config')



mongoose = require('mongoose'),
mongoose.Promise = global.Promise;
mongoose.connect(config.dburl,{
    useNewUrlParser:true,useUnifiedTopology: true
}).then(() => {
    console.log('\x1b[36m%s\x1b[0m ', 'Connected DB 🔄');    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

//const api = require('./server/controllers/userController');

const app = express();


app.use(express.static(path.join(__dirname+'/dist/ngApp')))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());



app.get('/*',(req,res)=>{
    res.sendFile(path.join(__dirname));
})

//app.use('/api',api) //importing route
require('./server/controllers/userController')(app)

const port = process.env.PORT || 3000;
const server = http.createServer(app)
server.listen(port,function(){
    console.log("Server running on port:"+port);
   
})