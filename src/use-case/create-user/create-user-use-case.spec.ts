import { describe, expect, it } from "vitest";
import { CreateUserUseCase } from "./create-user-use-case";
import { InMemoryCreateUserRepository } from "../../tests/repositories/in-memory-create-user-repository";
import { User } from "../../entities/User";

describe('Create user', () => {
    const inMemoryCreateUserRepository = new InMemoryCreateUserRepository()

    it('should be able create a new user', async () => {
        const createUserUseCase = new CreateUserUseCase(inMemoryCreateUserRepository)

        const userData: User = await createUserUseCase.execute({
            name: 'Igor',
            email: 'yc200720@gmail.com',
            password: 'massa'
        })

        expect(userData).toHaveProperty('id')
        expect(userData.name).toEqual('Igor')
    })

    it('should not be able create user', async () => {
        const createUserUseCase = new CreateUserUseCase(inMemoryCreateUserRepository)

        await createUserUseCase.execute({
            name: 'Igor',
            email: 'igor29nahan@gmail.com',
            password: 'massa'
        })

        expect(async () => await createUserUseCase.execute({
            name: 'Igo2r',
            email: 'igor29nahan@gmail.com',
            password: 'massa2'
        })).rejects.toThrowError('User already exist!')
    })
})