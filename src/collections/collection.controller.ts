import { ApiTags } from '@nestjs/swagger';
import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { CollectionService } from './collection.service';
import { InternalServerException } from '../handler';

@ApiTags('collections')
@Controller({
  path: 'collection',
  version: '1',
})
export class CollectionController {
  constructor(readonly collectionService: CollectionService) {}
  @Get('list')
  @HttpCode(HttpStatus.OK)
  getList(): any {
    try {
      return this.collectionService.list();
    } catch (e) {
      throw new InternalServerException(e.message);
    }
  }
}
