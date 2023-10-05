import { CollectionEntity } from '../entities/collection.entity';

export interface CollectionServiceImp {
  create(): CollectionEntity;
  list(): CollectionEntity[];
}
