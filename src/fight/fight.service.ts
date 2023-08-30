import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Fight } from './fight.entity';

@Injectable()
export class FightService {
  constructor(
    @InjectRepository(Fight)
    private readonly fightRepository: Repository<Fight>,
  ) {}

  async findAll(): Promise<Fight[]> {
    return this.fightRepository.find({
      relations: ['event_id', 'fighter1', 'fighter2'],
    });
  }

  async findOne(id: number): Promise<Fight> {
    return this.fightRepository.findOne({
      where: { id },
      relations: ['event_id', 'fighter1', 'fighter2'],
    });
  }

  async create(fightData: Partial<Fight>): Promise<Fight> {
    const fight = this.fightRepository.create(fightData);
    return this.fightRepository.save(fight);
  }

  async update(id: number, fightData: Partial<Fight>): Promise<Fight> {
    await this.fightRepository.update(id, fightData);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.fightRepository.delete(id);
  }
}
