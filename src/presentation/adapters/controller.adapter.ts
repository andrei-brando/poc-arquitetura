import { Request, Response } from 'express';

export interface Controller {
  handle(request: Request): Promise<Response>;
}
