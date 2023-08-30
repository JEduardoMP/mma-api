import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ranking } from './ranking.entity';

@Injectable()
export class RankingService {
  constructor(
    @InjectRepository(Ranking)
    private readonly rankingRepository: Repository<Ranking>,
  ) {}

  async findAll(): Promise<Ranking[]> {
    return this.rankingRepository.find({
      relations: ['fighter'],
    });
  }

  async findOne(id: number): Promise<Ranking> {
    return this.rankingRepository.findOne({ where: { id } });
  }

  async create(rankingData: Partial<Ranking>): Promise<Ranking> {
    const ranking = this.rankingRepository.create(rankingData);
    return this.rankingRepository.save(ranking);
  }

  async update(id: number, rankingData: Partial<Ranking>): Promise<Ranking> {
    await this.rankingRepository.update(id, rankingData);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.rankingRepository.delete(id);
  }
}
