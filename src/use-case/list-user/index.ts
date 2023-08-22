import { PrismaListUsersRepository } from "../../repositories/implementations/prisma-list-users-repository";
import { ListUsers } from "./list-user";
import { ListUsersController } from "./list-user-controller";

const prismaListUsersRepository = new PrismaListUsersRepository()
const listUsers = new ListUsers(prismaListUsersRepository)

export const listUsersController = new ListUsersController(listUsers)