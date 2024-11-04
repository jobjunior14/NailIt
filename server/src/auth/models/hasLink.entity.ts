import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { WebsiteEntity } from './website.entiy';
import { UserEntity } from './user.entity';

@Entity('has_links')
@Unique(['website', 'link', 'user'])
export class HasLinksEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;
  @ManyToOne(() => UserEntity, (user) => user.links, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id', referencedColumnName: 'user_name_id' })
  user: UserEntity;

  @ManyToOne(() => WebsiteEntity, (website) => website.links, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'website_id', referencedColumnName: 'id' })
  website: WebsiteEntity;

  @Column({ nullable: false })
  link: string;
}
