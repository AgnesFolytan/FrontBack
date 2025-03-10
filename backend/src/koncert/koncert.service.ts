import { Injectable } from '@nestjs/common';
import { CreateKoncertDto } from './dto/create-koncert.dto';
import { UpdateKoncertDto } from './dto/update-koncert.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class KoncertService {

  db: PrismaService;

  constructor(db: PrismaService) {
    this.db = db;
  }

  create(createKoncertDto: CreateKoncertDto) {
    return this.db.koncert.create({
      data: {
        fellepo: createKoncertDto.fellepo,
        kezdesiIdo: new Date(createKoncertDto.kezdesiIdo),
        elmaradE: false
      }
    });
  }

  findAll() {
    return `This action returns all koncert`;
  }

  findOne(id: number) {
    return `This action returns a #${id} koncert`;
  }

  update(id: number, updateKoncertDto: UpdateKoncertDto) {
    return `This action updates a #${id} koncert`;
  }

  remove(id: number) {
    return `This action removes a #${id} koncert`;
  }
}
