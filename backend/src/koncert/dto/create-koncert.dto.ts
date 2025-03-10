import { IsDateString, IsNotEmpty, IsString, IsBoolean, IsEmpty, IsOptional } from "class-validator"

export class CreateKoncertDto {
    @IsString()
    @IsNotEmpty()
    fellepo: string

    @IsDateString()
    kezdesiIdo: string

    @IsBoolean()
    @IsOptional()
    elmaradE?: boolean
}
