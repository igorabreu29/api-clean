import { User } from "../../entities/User";
import { ICreateUserRepository } from "../../repositories/ICreateUserRepository";

export class InMemoryCreateUserRepository implements ICreateUserRepository {
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