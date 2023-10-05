import { Injectable } from '@nestjs/common';
import { NftItemServiceImp } from './interfaces/nft.item.service.imp';
import { ReqCreateNftItemDto } from './dto/req.create.nft.item.dto';
import { NftItemEntity } from './entities/nft.item.entity';

@Injectable()
export class NftItemService implements NftItemServiceImp {
  create(value: ReqCreateNftItemDto) {
    console.log('value:~', value);
  }

  getList(): NftItemEntity[] {
    return [
      {
        id: 1,
        name: 'Create NFT',
        description: 'Description NTF',
        properties: `{color: 'green', story: 'how long will i love u'}`,
        supply: 20,
        image:
          'https://images.unsplash.com/photo-1540076156429-35ffe82b7870?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3435&q=80',
        owner: '0xCEd936932f53162a208484cD0a5Fe94D7eb0E456',
        isSelling: false,
        price: 0.025,
        amountListing: 0.01,
      },
      {
        id: 1,
        name: 'Create NFT',
        description: 'Description NTF',
        properties: `{color: 'green', story: 'how long will i love u'}`,
        supply: 20,
        image:
          'https://images.unsplash.com/photo-1540076156429-35ffe82b7870?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3435&q=80',
        owner: '0xCEd936932f53162a208484cD0a5Fe94D7eb0E456',
        isSelling: false,
        price: 0.025,
        amountListing: 0.01,
      },
    ];
  }
}
