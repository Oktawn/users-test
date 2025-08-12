import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { RoleUser } from "../utils/role.enum.js";

@Entity("users")
export class UsersEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  dateOfBirth: Date;

  @Column({ type: "enum", enum: RoleUser, default: RoleUser.USER })
  role: RoleUser;

  @Column({ default: true })
  isActive: boolean;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;
}