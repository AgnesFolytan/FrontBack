import { IsDate, IsDateString, isDateString, IsNotEmpty, IsString } from "class-validator"

export class CreateKoncertDto {
    @IsString()
    @IsNotEmpty()
    fellepo: string

    @IsDateString()
    kezdesiIdo: string
}
