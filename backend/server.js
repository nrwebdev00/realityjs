import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import dotenv from 'dotenv';
import colors from 'colors';

//Config Imports
import db from './config/db.js';

//Middleware Imports
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

//Routes Imports
import usersRoutes from './routes/userRoutes.js';
import listingsRoutes from './routes/listingsRoutes.js';

dotenv.config()

//Start DB connection
db();

const app = express();

//Logging Dev
if(process.env.NODE_ENV === "development"){
    app.use(morgan("dev"));
}

//Parser
app.use(express.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

//Mount Routes
app.use('/api/users', usersRoutes );
app.use('/api/listings', listingsRoutes );

//Config Routes

//Static Folder Path
const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/build')))

    app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    )
} else {
    app.get('/', (req, res) => {
        res.send('API is running....')
    })
}


//Error Middleware
app.use(notFound);
app.use(errorHandler);

//App Listen
const PORT = process.env.PORT || 5000
app.listen(
    PORT,
    console.log(
        `Server is in ${process.env.NODE_ENV} mode on port ${PORT}.`.brightYellow.bold.underline
    )
)