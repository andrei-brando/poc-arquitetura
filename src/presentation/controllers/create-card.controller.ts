import { Request, Response } from 'express';
import { Controller } from '../adapters/controller.adapter';

export class CreateCardController implements Controller {
  async handle(request: Request): Promise<Response> {
    throw new Error('Method not implemented.');
  }
}
