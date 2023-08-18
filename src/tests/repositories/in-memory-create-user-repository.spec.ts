import { describe, expect, it } from "vitest";
import { InMemoryCreateUserRepository } from "./in-memory-create-user-repository";

describe('methods of repository', () => {
    const inMemoryCreateUserRepository = new InMemoryCreateUserRepository()

    it('should be able return email equal if user exist', async () => {
        const findUserByEmail = await inMemoryCreateUserRepository.findByEmail('ycig05@gmail.com')

        expect(findUserByEmail.id).toEqual('30303030')
    })
})