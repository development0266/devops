import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

export enum Role {
  Admin = "admin",
  Member = "member",
  Owner = "owner",
  MoonhubSuperAdmin = "superadmin",
  MoonhubSystemAdmin = "systemadmin",
  Recruiter = "recruiter",
}

@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  firstname: string;

  @Column({ nullable: true })
  lastname: string;

  @Column({ nullable: true })
  email: string;

  @Column({ default: false })
  email_verified: boolean;

  @Column({ nullable: true })
  country: string;

  @Column()
  password: string;

  @Column({
    type: "enum",
    enum: Role,
    default: Role.Admin,
  })
  role: Role;

  @Column("boolean", { default: true })
  is_active: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ nullable: true })
  lastlogin_at: Date;

  @Column({ nullable: true })
  phone: string;
}
