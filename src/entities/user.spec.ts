import { describe, expect, it } from "vitest";
import { User } from "./User";

describe('user entitites', () => {
    it('should be able to do instance of class user', () => {
        const user = new User({
            id: '20202020',
            name: 'test',
            email: 'test@test.com',
            password: 'test-test',
            startDate: new Date()
        })

        expect(user).toBeInstanceOf(User)
        expect(user).toHaveProperty('id')
    })

    it('should not be able return id after instance user', () => {
        const user = new User({
            name: 'test',
            email: 'test@test.com',
            password: 'test-test',
            startDate: new Date()
        })

        expect(user).not.toHaveProperty('id')
        expect(user.id).toBeUndefined()
    })

    it('should not be able return startDate after instance user', () => {
        const user = new User({
            id: '202020',
            name: 'test',
            email: 'test@test.com',
            password: 'test-test',
        })

        expect(user).not.toHaveProperty('startDate')
        expect(user.startDate).toBeUndefined()
    })

    it('should not be able return startDate and id after instance user', () => {
        const user = new User({
            name: 'test',
            email: 'test@test.com',
            password: 'test-test',
        })

        expect(user).not.toHaveProperty('id')
        expect(user.id).toBeUndefined()
        expect(user).not.toHaveProperty('startDate')
        expect(user.startDate).toBeUndefined()
    })
})