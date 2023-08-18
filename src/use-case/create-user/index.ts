import { CreateUserRepository } from "../../repositories/implementations/create-user-repository";
import { CreateUserController } from "./create-user-controller";
import { CreateUserUseCase } from "./create-user-use-case";

const createUserRepository = new CreateUserRepository()
const createUserUseCase = new CreateUserUseCase(createUserRepository)

export const createUserController = new CreateUserController(createUserUseCase)