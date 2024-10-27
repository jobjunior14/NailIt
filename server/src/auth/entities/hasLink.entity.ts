import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Website } from './website.entiy';
import { User } from './user.entity';

@Entity('has_links')
@Unique(['website', 'link', 'user'])
export class HasLinks extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;
  @ManyToOne(() => User, (user) => user.links, { onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'user_id', referencedColumnName: 'user_name_id' })
  user: User;

  @ManyToOne(() => Website, (website) => website.links, { onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'website_id', referencedColumnName: 'id' })
  website: Website;

  @Column({ nullable: false })
  link: string;
}
