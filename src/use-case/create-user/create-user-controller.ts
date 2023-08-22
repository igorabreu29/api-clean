import { FastifyRequest, FastifyReply } from "fastify";
import { CreateUserUseCase } from "./create-user";
import { z } from "zod";
import { User } from "../../entities/User";

export class CreateUserController {
    constructor(private readonly createUserUseCase: CreateUserUseCase) {}

    async handler(req: FastifyRequest, res: FastifyReply) {
        const createUserSchema = z.object({
            name: z.string(),
            email: z.string(),
            password: z.string()
        })

        const { name, email, password } = createUserSchema.parse(req.body)

        try {
            const userData: User = await this.createUserUseCase.execute({
                name,
                email,
                password
            })

            return res.status(201).send(userData)
        } catch(err) {
            return res.status(400).send(err.message || err)
        }
    }
}