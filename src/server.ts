import App from './app';
import dotenv from 'dotenv';
import { Database } from './infra/database/connections/database';

dotenv.config({
  path: './../.env',
});

new Database()
  .openConnection()
  .then((_) => {
    const app = new App();

    const port = process.env.PORT || '8080';

    app.init();
    app.start(parseInt(port));
  })
  .catch(console.error);
