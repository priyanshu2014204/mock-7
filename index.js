const express=require('express');
const connection = require('./config/db');
const app=express()
const corsOpts = {
  origin: '*',

  methods: [
    'GET',
    'POST',
    'DELETE'
  ],

  allowedHeaders: [
    'Content-Type',
  ],
};
const cors=require('cors')

// require('dotenv').config()
app.use(express.json());
try{
  app.use(cors({
    origin: '*',
  
    methods: [
      'GET',
      'POST',
      'DELETE'
    ]
  }))
  
}
catch(err){
// console.log(err)
}

const product=require('./routes/product.route')

app.use('/api',product)


const PORT=process.env.port || 8080;

app.listen(PORT,()=>{
    try{ 
        connection;
        console.log(`Connected to port ${PORT}`);
    }
    catch(err){
      console.log(err.message);
    }
})

