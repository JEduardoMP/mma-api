import { Module } from '@nestjs/common';
import { FighterController } from './fighter.controller';
import { FighterService } from './fighter.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fighter } from './fighter.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Fighter])],
  controllers: [FighterController],
  providers: [FighterService],
})
export class FighterModule {}
