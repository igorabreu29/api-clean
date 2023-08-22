import { User } from "../../entities/User";
import { CreateUserRepository } from "../../repositories/CreateUserRepository";

export class InMemoryCreateUserRepository implements CreateUserRepository {
    private users: User[] = [
        {
            id: '30303030',
            name: 'Sei lá',
            email: 'ycig05@gmail.com',
            password: '200529',
        }
    ] 

    async findByEmail(email: string): Promise<User> {
        const findUserByEmail = this.users.find(user => user.email === email)

        return findUserByEmail
    }

    async create(data: User): Promise<User> {
        const { name, email, password } = data

        const createUser: User = {
            id: '505050',
            email: email,
            password: password,
            name: name,
            startDate: new Date()
        }

        this.users.push(createUser)

        return createUser
    } 
}