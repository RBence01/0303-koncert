import { Transform } from "class-transformer";
import { IsDate, IsInt, IsString, Min, MinLength } from "class-validator";

export class CreateKoncertDto {
  @IsString()
  @MinLength(1)
  fellepo: string;

  @Transform(e => {
    if (typeof e.value == "string") return new Date(e.value);
    else return e.value;
  })
  @IsDate()
  kezdes: Date;

  @Transform(e => {
    try {
      if (typeof e.value == "string") return parseInt(e.value);
      else return e.value
    } catch {
      return e.value;
    }
  })
  @IsInt()
  @Min(1)
  idotartam: number;
}
