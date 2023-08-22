import { User } from "../entities/User";

type ListUsersRepositoryResponse = User[]

export interface ListUsersRepository {
    getAllUsers: () => Promise<ListUsersRepositoryResponse>
}