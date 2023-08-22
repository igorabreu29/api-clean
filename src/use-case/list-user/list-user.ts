import { User } from "../../entities/User";
import { ListUsersRepository } from "../../repositories/ListUsersRepository";

type ListUsersResponse = User[]

export class ListUsers {
    constructor (
        private listUsersRepository: ListUsersRepository
    ) {}

    async execute(): Promise<ListUsersResponse> {
        const users = await this.listUsersRepository.getAllUsers()

        return users
    }
}