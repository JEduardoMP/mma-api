import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FightModule } from './fight/fight.module';
import { EventModule } from './event/event.module';
import { FighterModule } from './fighter/fighter.module';
import { RankingModule } from './ranking/ranking.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: 'mma_db',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: false,
    }),
    FightModule,
    EventModule,
    FighterModule,
    RankingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
