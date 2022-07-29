import {
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('app')
export class AppEntity {
  @PrimaryGeneratedColumn('uuid')
  connection: string;

  @CreateDateColumn()
  connectedAt: Date;

  @DeleteDateColumn({ default: null })
  disConnectedAt: Date;
}
