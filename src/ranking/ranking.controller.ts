import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { RankingService } from './ranking.service';
import { Ranking } from './ranking.entity';

@Controller('ranking')
export class RankingController {
  constructor(private readonly rankingService: RankingService) {}

  @Get()
  async findAll(): Promise<Ranking[]> {
    return this.rankingService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Ranking> {
    return this.rankingService.findOne(id);
  }

  @Post()
  async create(@Body() rankingData: Partial<Ranking>): Promise<Ranking> {
    return this.rankingService.create(rankingData);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() rankingData: Partial<Ranking>,
  ): Promise<Ranking> {
    return this.rankingService.update(id, rankingData);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.rankingService.remove(id);
  }
}
