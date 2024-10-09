import {
  BaseEntity,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { Website } from './website.entiy';
import { User } from './user.entity';

@Entity('has_links')
export class HasLinks extends BaseEntity {
  @PrimaryColumn({ type: 'int' })
  id: number;

  @ManyToOne(() => User, (user) => user.links)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'user_name_id' })
  user: User;

  @ManyToOne(() => Website, (website) => website.name)
  @JoinColumn({ name: 'website_id', referencedColumnName: 'id' })
  website: Website;
}
