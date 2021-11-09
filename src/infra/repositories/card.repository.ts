import { CreateCardParams } from '../../domain/contracts/params';
import { ICardRepository } from '../../domain/contracts/repositories';
import { databaseHelper } from '../database/connections';
import { CardEntity } from '../database/entities/card.entity';

export class CardRepository implements ICardRepository {
  async create(params: CreateCardParams): Promise<void> {
    const repository = await databaseHelper.getRepository<CardEntity>(
      CardEntity
    );

    const card = repository.create({
      name: params.name,
      content: params.content,
    });

    await repository.save(card);
  }
}
