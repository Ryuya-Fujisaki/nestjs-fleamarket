/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  IsInt,
  Min,
  IsOptional,
  IsNotEmpty,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateItemDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(40)
  name: string;

  @IsInt()
  @Min(1)
  price: number;

  @IsOptional()
  @IsString()
  @MaxLength(1000)
  description?: string;
}
