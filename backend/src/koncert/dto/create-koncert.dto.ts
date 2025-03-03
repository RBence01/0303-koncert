import { IsDate, IsInt, IsString, Min, MinLength } from "class-validator";

export class CreateKoncertDto {
  @IsString()
  @MinLength(1)
  fellepo: string;

  @IsDate()
  kezdes: Date;

  @IsInt()
  @Min(1)
  idotartam: number;
}
