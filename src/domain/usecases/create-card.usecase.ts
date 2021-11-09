import { ICardRepository } from '../contracts/repositories';
import { Card } from '../models';

export interface Params {
  name: string;
  content?: string;
}

export interface ICreateCardUseCase {
  execute(params: Params): Promise<void>;
}

export class CreateCardUseCase implements ICreateCardUseCase {
  readonly #repository: ICardRepository;

  constructor(cardRepository: ICardRepository) {
    this.#repository = cardRepository;
  }

  public async execute(params: Params): Promise<void> {
    const { name, content } = params;

    console.log('aqui usecase');

    try {
      await this.#repository.create({ name, content });
    } catch (error) {
      throw new Error('Errinho 123');
    }
  }
}
