import { PartialType } from '@nestjs/mapped-types';
import { CreateKoncertDto } from './create-koncert.dto';
import { IsBoolean, IsOptional } from 'class-validator';

export class UpdateKoncertDto extends PartialType(CreateKoncertDto) {
  @IsOptional()
  @IsBoolean()
  elmarad: boolean;
}
