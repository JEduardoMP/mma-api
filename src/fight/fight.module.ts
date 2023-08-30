import { Module } from '@nestjs/common';
import { FightController } from './fight.controller';
import { FightService } from './fight.service';
import { FighterModule } from 'src/fighter/fighter.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fight } from './fight.entity';
import { EventModule } from 'src/event/event.module';

@Module({
  imports: [TypeOrmModule.forFeature([Fight]), FighterModule, EventModule],
  controllers: [FightController],
  providers: [FightService],
})
export class FightModule {}
