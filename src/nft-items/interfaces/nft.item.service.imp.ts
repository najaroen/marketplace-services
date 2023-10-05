import { NftItemEntity } from '../entities/nft.item.entity';
import { ReqCreateNftItemDto } from '../dto/req.create.nft.item.dto';

export interface NftItemServiceImp {
  create(value: ReqCreateNftItemDto): void;
  getList(): NftItemEntity[];
}
