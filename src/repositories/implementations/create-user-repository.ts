import { prisma } from "../../database/prisma";
import { User } from "../../entities/User";
import { ICreateUserRepository } from "../ICreateUserRepository";

export class CreateUserRepository implements ICreateUserRepository {
    async findByEmail(email: string): Promise<User> {
        const findUserByEmail = await prisma.user.findFirst({
            where: {
                email
            }
        })

        return findUserByEmail
    }

    async create(data: User): Promise<User> {
        const { email, name, password } = data

        const createNewUser = await prisma.user.create({
            data: {
                name,
                email,
                password
            }
        })

        return createNewUser
    }
}