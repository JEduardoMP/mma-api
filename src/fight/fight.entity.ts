import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Fighter } from '../fighter/fighter.entity';
import { Event } from '../event/event.entity';

@Entity()
export class Fight {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Event, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'event_id' })
  event_id: Event;

  @ManyToOne(() => Fighter, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'fighter1_id' })
  fighter1: Fighter;

  @ManyToOne(() => Fighter, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'fighter2_id' })
  fighter2: Fighter;

  @Column()
  result: string;
}
