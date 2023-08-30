import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Fight } from '../fight/fight.entity';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @Column()
  location: string;

  @OneToMany(() => Fight, (fight) => fight.event_id)
  fights: Fight[];
}
