const express = require('express');
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()
const notFound = require('./middlewares/not_found')
const errorHandlerMiddleware = require('./middlewares/error_handler_mdlwr')

const app = express();

const port = process.env.PORT || 3000;

//middlewares
app.use(express.json());


//Routes
app.use('/api/v1/tasks', tasks);

app.use(errorHandlerMiddleware);
app.use(notFound);

const start = async () => {
    try {
        await connectDB(process.env.connectionString)
        app.listen(port, console.log(`Server running at port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

start();