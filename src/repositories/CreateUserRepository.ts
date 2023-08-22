import { User } from "../entities/User";

export interface CreateUserRepository {
    findByEmail: (email: string) => Promise<User>
    create: (data: User) => Promise<User>
}