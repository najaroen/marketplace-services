import { Module } from '@nestjs/common';
import { IsExist } from '../utils/validators/is-exists.validator';
import { IsNotExist } from '../utils/validators/is-not-exists.validator';
import { NftItemController } from './nft.item.controller';
import { NftItemService } from './nft.item.service';
@Module({
  imports: [],
  controllers: [NftItemController],
  providers: [IsExist, IsNotExist, NftItemService],
  exports: [NftItemService],
})
export class NftItemModule {}
