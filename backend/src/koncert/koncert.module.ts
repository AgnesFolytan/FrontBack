import { Module } from '@nestjs/common';
import { KoncertService } from './koncert.service';
import { KoncertController } from './koncert.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [KoncertController],
  providers: [KoncertService, PrismaService],
})
export class KoncertModule {}
