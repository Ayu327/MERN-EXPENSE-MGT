//what is dependencies
import  express  from 'express';
import colors  from 'colors'
import morgan from 'morgan';
//npm i colors
import cors from 'cors'
import userRoutes from './routes/userRoute.js'


import dotenv from 'dotenv'
import connectDb from './config/connectDb.js';


//configure env
dotenv.config();


//database config
connectDb()





//rest object
const app =express()

//middleware
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

//routes
// app.get('/', (req,res)=>{
//     res.send("<h1>Hello from server</h1>")
// })
app.use('/api/v1/users',userRoutes)

//port
const PORT = 8080 || process.env.PORT

//listen server
app.listen(PORT,()=>{
    console.log(`Server running on PORT ${PORT}`)
})

//npm run server

