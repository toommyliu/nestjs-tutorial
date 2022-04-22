import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'user_id',
  })
  public id: number;

  @Column({ name: 'email_address', nullable: true, unique: true, default: '' })
  public emailAddress: string;

  @Column({ nullable: false, default: '' })
  public username: string;

  @Column({ nullable: false, default: '' })
  public password: string;
}
