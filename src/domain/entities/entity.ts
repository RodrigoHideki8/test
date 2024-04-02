import { UniqueIdentifier } from './types';
import { AggregateRoot } from '@nestjs/cqrs';

export interface IEntity extends AggregateRoot {
  id?: UniqueIdentifier;
  createdAt?: Date;
  updatedAt?: Date;
  active?: boolean;
}
