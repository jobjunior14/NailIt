import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryColumn,
  Unique,
} from 'typeorm';
import { HasLinks } from './hasLink.entity';

@Entity('websites')
@Unique(['name'])
export class Website extends BaseEntity {
  @PrimaryColumn({ type: 'int' })
  id: number;

  @Column({ type: 'varchar', length: 20 })
  name: string;

  @OneToMany(() => HasLinks, (hasLink) => hasLink.website)
  links: HasLinks;
}
