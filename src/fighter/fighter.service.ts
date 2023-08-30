import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Fighter } from './fighter.entity';

@Injectable()
export class FighterService {
  constructor(
    @InjectRepository(Fighter)
    private readonly fighterRepository: Repository<Fighter>,
  ) {}

  async findAll(): Promise<Fighter[]> {
    return this.fighterRepository.find();
  }

  async findOne(id: number): Promise<Fighter> {
    return this.fighterRepository.findOne({ where: { id } });
  }

  async create(fighterData: Partial<Fighter>): Promise<Fighter> {
    const fighter = this.fighterRepository.create(fighterData);
    return this.fighterRepository.save(fighter);
  }

  async update(id: number, fighterData: Partial<Fighter>): Promise<Fighter> {
    await this.fighterRepository.update(id, fighterData);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.fighterRepository.delete(id);
  }
}
