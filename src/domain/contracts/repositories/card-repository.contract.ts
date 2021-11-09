import { Card } from '../../models';
import { CreateCardParams } from '../params';

export interface ICardRepository {
  create(params: CreateCardParams): Promise<void>;
}
