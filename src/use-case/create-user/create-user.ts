import { User } from "../../entities/User";
import { CreateUserRepository } from "../../repositories/CreateUserRepository";

interface CreateUserRequest {
    name: string
    email: string
    password: string    
}

type CreateUserResponse = User

export class CreateUserUseCase {
    constructor(private readonly createUserRepository: CreateUserRepository) {}

    async execute({ name, email, password }: CreateUserRequest): Promise<CreateUserResponse> {
        const findUserByEmail = await this.createUserRepository.findByEmail(email)

        if (findUserByEmail) {
            throw new Error('User already exist!')
        }

        try {
            const createdUser = await this.createUserRepository.create({
                name,
                email,
                password
            })

            const user = new User(createdUser)

            return user
        } catch(err) {
            return err.message
        }
    }
}