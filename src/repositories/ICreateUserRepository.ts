import { User } from "../entities/User";

export interface ICreateUserRepository {
    findByEmail: (email: string) => Promise<User>
    create: (data: User) => Promise<User>
}