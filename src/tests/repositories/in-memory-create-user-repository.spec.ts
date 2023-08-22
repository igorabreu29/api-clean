import { describe, expect, it } from "vitest";
import { InMemoryCreateUserRepository } from "./in-memory-create-user-repository";

describe('methods of repository', () => {
    const inMemoryCreateUserRepository = new InMemoryCreateUserRepository()

    it('should be able return email equal if user exist', async () => {
        const findUserByEmail = await inMemoryCreateUserRepository.findByEmail('ycig05@gmail.com')

        expect(findUserByEmail).toEqual({
            id: '30303030',
            name: 'Sei lá',
            email: 'ycig05@gmail.com',
            password: '200529',
        })
    })

    it('should be able create user', async () => {
        const createUser = await inMemoryCreateUserRepository.create({
            name: 'Igor',
            email: 'igor92nhana',
            password: '2020202020',
        })

        expect(createUser).toHaveProperty('startDate')
        expect(createUser).toEqual({
            id: '505050',
            name: 'Igor',
            email: 'igor92nhana',
            password: '2020202020',
            startDate: new Date()
        })
    })
})