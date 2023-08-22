import { prisma } from "../../database/prisma";
import { User } from "../../entities/User";
import { ListUsersRepository } from "../ListUsersRepository";

export class PrismaListUsersRepository implements ListUsersRepository {
    async getAllUsers(): Promise<User[]> {
        const users = await prisma.user.findMany()

        return users
    }
} 