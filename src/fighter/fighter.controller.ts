import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { FighterService } from './fighter.service';
import { Fighter } from './fighter.entity';

@Controller('fighter')
export class FighterController {
  constructor(private readonly fighterService: FighterService) {}

  @Get()
  async findAll(): Promise<Fighter[]> {
    return this.fighterService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Fighter> {
    return this.fighterService.findOne(id);
  }

  @Post()
  async create(@Body() fighterData: Partial<Fighter>): Promise<Fighter> {
    return this.fighterService.create(fighterData);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() fighterData: Partial<Fighter>,
  ): Promise<Fighter> {
    return this.fighterService.update(id, fighterData);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.fighterService.remove(id);
  }
}
