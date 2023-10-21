import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import connectDB from './config/db.js'
import authRoute from './routes/authRoute.js'
import cors from 'cors'

dotenv.config()

connectDB();

// rest object
const app = express()

// middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

// routes
app.use("/api/v1/auth", authRoute);

// rest api
app.get('/', (req,res)=>{
    res.send({
        message: 'Welcome'
    })
})


const PORT = process.env.PORT

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})