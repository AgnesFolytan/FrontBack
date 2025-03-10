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
    return this.db.koncert.findMany();
  }

  findOne(id: number) {
    return this.db.koncert.findMany({
        where: {id}
      }
    );
  }

  update(id: number, updateKoncertDto: UpdateKoncertDto) {
    return this.db.koncert.update({
      where: {id},
      data: {
        fellepo: updateKoncertDto.fellepo,
        kezdesiIdo: new Date(updateKoncertDto.kezdesiIdo),
        elmaradE: updateKoncertDto.elmaradE
      }
    });
  }

  remove(id: number) {
    return this.db.koncert.delete({
      where: {id}
    });
  }
}
