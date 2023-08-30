import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Fighter } from '../fighter/fighter.entity';

@Entity()
export class Ranking {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Fighter, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'fighter_id' })
  fighter: Fighter;

  @Column()
  weightClass: string;

  @Column()
  rankingPosition: number;
}
