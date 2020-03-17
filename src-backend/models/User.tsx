import { Column, Model, Table } from 'sequelize-typescript';

@Table
class User extends Model<User> {
  @Column email!: string;
  @Column firstName!: string;
  @Column lastName!: string;
  @Column password!: string;
}

export default User;
