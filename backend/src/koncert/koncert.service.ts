import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateKoncertDto } from './dto/create-koncert.dto';
import { UpdateKoncertDto } from './dto/update-koncert.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class KoncertService {
  constructor (private readonly db: PrismaService) {}

  create(createKoncertDto: CreateKoncertDto) {
    console.log(createKoncertDto.kezdes.toISOString());
    return this.db.koncert.create({data: createKoncertDto});
  }

  findAll() {
    return this.db.koncert.findMany();
  }

  async findOne(id: number) {
    try {
      return await this.db.koncert.findUniqueOrThrow({where: {id}});
    } catch {
      throw new NotFoundException("Nem található koncert ezzel idvel ("+id+")");
    }
  }

  async update(id: number, updateKoncertDto: UpdateKoncertDto) {
    try {
      return await this.db.koncert.update({where: {id}, data: updateKoncertDto});
    } catch {
      throw new NotFoundException("Nem található koncert ezzel idvel ("+id+")");
    }
  }

  async remove(id: number) {
    try {
      return await this.db.koncert.delete({where: {id}});
    } catch {
      throw new NotFoundException("Nem található koncert ezzel idvel ("+id+")");
    }
  }
}
