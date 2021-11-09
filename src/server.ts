import App from './main/app';
import dotenv from 'dotenv';
import { databaseHelper } from './infra/database/connections';

dotenv.config({
  path: './../.env',
});

Promise.all([databaseHelper.connect()])
  .then(() => {
    const app = new App();

    const port = process.env.PORT || '8080';

    app.init();
    app.start(parseInt(port));
  })
  .catch(console.error);
