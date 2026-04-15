const app = require('./app');
const db = require('./config/db');
const usermodel = require('./model/user.model')


const port = 100;

app.get('/', (req,res)=>{
    res.send("Hello world awa")
});

app.listen(port,()=>{
    console.log(`server Listing to port http://localhost:${port}`);
})