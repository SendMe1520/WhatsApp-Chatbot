// importing dependencies
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import routes from './routes/index.js'

// port defined
const port = 5000;

// defining the Expres app
const app = express();

// adding Helmet to enhance API security
app.use(helmet());

// parse JSON bodies into JS objects
app.use(express.json());

app.use(
    express.urlencoded({
      extended: false
    })
  );

// enabling CORS for all requests
app.use(cors());

//.........Catch 404 errors.......... 


// defining route modules
app.use('/incoming', routes.incoming);

app.listen(port, () => {console.log(`App listening at post ${port}`)})