import { Module, forwardRef } from '@nestjs/common';
import { EventController } from './event.controller';
import { EventService } from './event.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from './event.entity';
import { FightModule } from 'src/fight/fight.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Event]),
    // FightModule,
    forwardRef(() => FightModule),
  ],
  controllers: [EventController],
  providers: [EventService],
})
export class EventModule {}
