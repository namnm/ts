import { Column, Model, Table } from 'sequelize-typescript';

@Table
class User extends Model<User> {
  @Column({ primaryKey: true, autoIncrement: true })
  id!: number;

  @Column
  email!: string;

  @Column
  firstName!: string;

  @Column
  lastName!: string;

  @Column
  password!: string;
}

export default User;
