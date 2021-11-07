import express, { Request, Response, Router } from 'express';
import cors from 'cors';

export default class App {
  readonly #express: express.Application;

  constructor() {
    this.#express = express();
  }

  public init() {
    this.config();
    // this.middlewares();
    this.routes();
  }

  private config() {
    this.#express.use(express.urlencoded({ extended: false }));
    this.#express.use(express.json());
    this.#express.use(cors());
  }

  private routes() {
    const router = Router();

    this.#express.get('/', (_: Request, response: Response) =>
      response.redirect('/api')
    );
    this.#express.use('/api', router);

    router.get('/', (_: Request, response: Response) =>
      response.send('API rodando...')
    );
  }

  public start(port: number) {
    this.#express.listen(port, () => {
      console.log('API rodando...');
    });
  }
}
