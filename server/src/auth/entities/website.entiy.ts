import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { HasLinks } from './hasLink.entity';

@Entity('websites')
@Unique(['name'])
export class Website extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'smallint' })
  id: number;

  @Column({ type: 'varchar', length: 20 })
  name: string;

  @OneToMany(() => HasLinks, (hasLink) => hasLink.website)
  links: HasLinks;
}
