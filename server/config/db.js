import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        const connect = mongoose.connect(process.env.DB_URL)
        console.log('Database connected')
    } catch (err) {
        console.log("Error connect to database",err)
    }
}

export default connectDB