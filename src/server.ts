import App from './app';
import dotenv from 'dotenv';

const app = new App();

dotenv.config({
  path: './../.env',
});

const port = process.env.PORT || '8080';

app.init();
app.start(parseInt(port));
