import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, MinLength } from 'class-validator';

export class CreateCollectionDto {
  @ApiProperty({ example: 'My collection' })
  @IsNotEmpty()
  @MinLength(4)
  name: string;

  @ApiProperty({ example: 'description you collection' })
  @IsNotEmpty()
  @MinLength(4)
  description: string;

  @IsOptional()
  url?: string;

  @IsOptional()
  categories?: string;

  @IsOptional()
  logoImg?: string;

  @IsOptional()
  featureImg?: string;

  @IsOptional()
  bannerImg?: string;
}
