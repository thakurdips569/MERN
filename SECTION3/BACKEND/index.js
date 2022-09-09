// importing express module
const express = require('express');

//routers add
// const videoRouter = require('./routers/videoRouter');
const imageRouter = require('./routers/imageRouter');
const userRouter = require('./routers/userRouter');
const productRouter = require('./routers/productRouter');
const cors = require('cors');
// initializing express app
const app = express();

const port = 5000;
//middleware
app.use(express.json());
app.use(cors({
    origin : ['http://localhost:3000']
})) 

// app.use('/video', videoRouter);
app.use('/image', imageRouter);
app.use('/user', userRouter);
app.use('/user', productRouter);


//route or endpoint
app.get( '/',(req,res) => {
    res.send('respose from express');
})
app.get( '/home',(req,res) => {
    res.send('respose from home');
})

// starting of server               
app.listen( port, () =>{
    console.log('server started..........');
}); 
