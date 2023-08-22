import { FastifyReply, FastifyRequest } from "fastify";
import { ListUsers } from "./list-user";
import { User } from "../../entities/User";

type ListUsersControllerResponse = User[]

export class ListUsersController {
    constructor (
        private listUsers: ListUsers
    ) {}

    async handler(req: FastifyRequest, res: FastifyReply): Promise<ListUsersControllerResponse> {
        const users = await this.listUsers.execute()
        
        return res.status(200).send(users)
    }
}