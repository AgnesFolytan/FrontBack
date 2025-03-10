import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { KoncertService } from './koncert.service';
import { CreateKoncertDto } from './dto/create-koncert.dto';
import { UpdateKoncertDto } from './dto/update-koncert.dto';

@Controller('koncert')
export class KoncertController {
  constructor(private readonly koncertService: KoncertService) {}

  @Post()
  create(@Body() createKoncertDto: CreateKoncertDto) {
    return this.koncertService.create(createKoncertDto);
  }

  @Get()
  findAll() {
    return this.koncertService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.koncertService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKoncertDto: UpdateKoncertDto) {
    return this.koncertService.update(+id, updateKoncertDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.koncertService.remove(+id);
  }
}
