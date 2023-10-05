import { Module } from '@nestjs/common';
import { CollectionService } from './collection.service';
import { CollectionController } from './collection.controller';
import { IsExist } from '../utils/validators/is-exists.validator';
import { IsNotExist } from '../utils/validators/is-not-exists.validator';
@Module({
  imports: [],
  controllers: [CollectionController],
  providers: [IsExist, IsNotExist, CollectionService],
  exports: [CollectionService],
})
export class CollectionModule {}
