import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MinLength } from 'class-validator';

export class ReqCreateNftItemDto {
  @ApiProperty({ example: 'NFT Item' })
  @IsNotEmpty()
  @MinLength(4)
  name: string;

  @IsNotEmpty()
  @MinLength(4)
  description: string;
  @IsNotEmpty()
  properties: string;
  supply: number;
  image: string;
  owner: string;
  price: number;
  amountListing?: number;
}
