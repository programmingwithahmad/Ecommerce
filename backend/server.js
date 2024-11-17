import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoute  from './routes/authRoute.js'
import cors  from 'cors';
import categoryRoutes from './routes/categoryRoutes.js';
import productRoutes from './routes/productRoutes.js';
import assistantRoute from './routes/assistantRoute.js';
import ngrok from 'ngrok';
import bodyParser from 'body-parser';

//configure env
dotenv.config();   

//database config
connectDB();

//rest object
const app = express();
 
//middleware
app.use(cors())
app.use(express.json());
app.use(morgan('dev'));
app.use(bodyParser.json());


//routes
app.use('/api/v1/auth', authRoute)
app.use('/api/v1/category', categoryRoutes)
app.use('/api/v1/product', productRoutes)
app.use('/cx', assistantRoute)

 
//rest api            
app.get('/', (req, res) => {
    res.send('Welcome to ecommerce');
})  


//PORT
const PORT = process.env.PORT || 3000;


//run listen
app.listen(PORT ,() => {
    console.log(`Server is running on port ${PORT}`.bgYellow.white);
})
