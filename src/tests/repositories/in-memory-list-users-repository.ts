import { User } from "../../entities/User";
import { ListUsersRepository } from "../../repositories/ListUsersRepository";

export class InMemoryListUsersRepository implements ListUsersRepository {
    private users: User[] = [
        {
            id: '20202020',
            name: 'igor',
            email: 'johndoe@com.com',
            password: '2020202020',
            startDate: new Date()
        },
        
        {
            id: '3030303030',
            name: 'nahan',
            email: 'johndoe@email.com',
            password: '4040404040',
            startDate: new Date()
        },
    ]

    async getAllUsers(): Promise<User[]> {
        return this.users
    }
}