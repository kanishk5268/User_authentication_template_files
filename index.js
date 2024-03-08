const dotenv = require('dotenv');
const connectDB = require('./db/connectDB');
const app = require('./app');

dotenv.config({path:"./env"});

connectDB().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`Server is running at port:${process.env.PORT}`);
    });
})
.catch(()=>{
    console.log("MONGODB connection failed !!!",err);
})


app.use(express.json());

const port = 3000;


app.listen(port,()=>{
    console.log(`App is listening on port: ${port}`);
})