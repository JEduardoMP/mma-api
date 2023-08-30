import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Fighter {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ name: 'weight_class' })
  weightClass: string;

  @Column()
  nationality: string;

  @Column()
  team: string;
}
