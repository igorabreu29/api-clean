import { PrismaCreateUserRepository } from "../../repositories/implementations/prisma-create-user-repository";
import { CreateUserController } from "./create-user-controller";
import { CreateUserUseCase } from "./create-user";

const prismaCreateUserRepository = new PrismaCreateUserRepository()
const createUserUseCase = new CreateUserUseCase(prismaCreateUserRepository)

export const createUserController = new CreateUserController(createUserUseCase)