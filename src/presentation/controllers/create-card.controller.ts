import { Request, Response } from 'express';
import { ICreateCardUseCase } from '../../domain/usecases';
import { Controller } from '../contracts';

export class CreateCardController implements Controller {
  private usecase: ICreateCardUseCase;

  constructor(createCardUseCase: ICreateCardUseCase) {
    this.usecase = createCardUseCase;
  }

  public async handle(request: Request, response: Response): Promise<Response> {
    const { name, content } = request.body;

    console.log(name, content);

    await this.usecase.execute({ name, content });

    return response.json({ message: 'tudo certo' });
  }
}
