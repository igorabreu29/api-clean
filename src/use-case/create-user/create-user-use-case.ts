import { ICreateUserRepository } from "../../repositories/ICreateUserRepository";
import { CreateUserDTO } from "./create-user-dto";

export class CreateUserUseCase {
    constructor(private readonly createUserRepository: ICreateUserRepository) {}

    async execute({ name, email, password }: CreateUserDTO) {
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
    
            return createdUser
        } catch(err) {
            return err.message
        }
    }
}