import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { FightService } from './fight.service';
import { Fight } from './fight.entity';

@Controller('fight')
export class FightController {
  constructor(private readonly fightService: FightService) {}

  @Get()
  async findAll(): Promise<Fight[]> {
    return this.fightService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Fight> {
    return this.fightService.findOne(id);
  }

  @Post()
  async create(@Body() fightData: Partial<Fight>): Promise<Fight> {
    return this.fightService.create(fightData);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() fightData: Partial<Fight>,
  ): Promise<Fight> {
    return this.fightService.update(id, fightData);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.fightService.remove(id);
  }
}
