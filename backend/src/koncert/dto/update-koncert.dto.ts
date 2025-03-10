import { PartialType } from '@nestjs/mapped-types';
import { CreateKoncertDto } from './create-koncert.dto';

export class UpdateKoncertDto extends PartialType(CreateKoncertDto) {}
