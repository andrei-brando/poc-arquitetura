import { Column, Entity } from 'typeorm';
import { EntityBase } from './base.entity';

@Entity({ name: 'cards' })
export class CardEntity extends EntityBase {
  @Column()
  name!: string;

  @Column()
  content!: string;
}
