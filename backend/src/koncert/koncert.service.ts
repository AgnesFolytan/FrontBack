import { BadRequestException, Injectable } from '@nestjs/common';
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
    let kezdesiIdoDate = new Date(createKoncertDto.kezdesiIdo)
    if (Date.now() < kezdesiIdoDate.getTime()) {
      return this.db.koncert.create({
        data: {
          fellepo: createKoncertDto.fellepo,
          kezdesiIdo: new Date(createKoncertDto.kezdesiIdo),
          idotartam: createKoncertDto.idotartam,
          elmaradE: false
        }
      });
    }
    else{
      throw new BadRequestException("kezdesiIdo nem lehet a múltban!")
    }
  }

  findAll() {
    return this.db.koncert.findMany();
  }

  findOne(id: number) {
    return this.db.koncert.findMany({
      where: { id }
    }
    );
  }

  update(id: number, updateKoncertDto: UpdateKoncertDto) {
    return this.db.koncert.update({
      where: { id },
      data: {
        fellepo: updateKoncertDto.fellepo,
        kezdesiIdo: updateKoncertDto.kezdesiIdo ? new Date(updateKoncertDto.kezdesiIdo) : undefined,
        idotartam: updateKoncertDto.idotartam,
        elmaradE: updateKoncertDto.elmaradE
      }
    });
  }

  remove(id: number) {
    return this.db.koncert.delete({
      where: { id }
    });
  }
}
