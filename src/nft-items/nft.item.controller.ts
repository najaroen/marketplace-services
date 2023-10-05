import { ApiTags } from '@nestjs/swagger';
import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { NftItemService } from './nft.item.service';
import { InternalServerException } from '../handler';
@ApiTags('nftitem')
@Controller({
  path: 'nft',
  version: '1',
})
export class NftItemController {
  constructor(readonly nftItemService: NftItemService) {}

  @Get('list')
  @HttpCode(HttpStatus.OK)
  getList() {
    try {
      return this.nftItemService.getList();
    } catch (e) {
      throw new InternalServerException(e?.message);
    }
  }
}
