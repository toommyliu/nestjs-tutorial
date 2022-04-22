import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'user_id',
  })
  public id: number;

  @Column({ name: 'email_address', nullable: true, unique: true })
  public emailAddress: string;

  @Column({ nullable: false })
  public username: string;

  @Column({ nullable: false })
  public password: string;
}
