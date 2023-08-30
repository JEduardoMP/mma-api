import { Module } from '@nestjs/common';
import { RankingService } from './ranking.service';
import { RankingController } from './ranking.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ranking } from './ranking.entity';
import { FighterModule } from 'src/fighter/fighter.module';

@Module({
  imports: [TypeOrmModule.forFeature([Ranking]), FighterModule],
  providers: [RankingService],
  controllers: [RankingController],
})
export class RankingModule {}
