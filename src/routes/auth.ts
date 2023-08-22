import { FastifyInstance } from "fastify";
import { z } from 'zod'
import { prisma } from '../database/prisma'
import { createUserController } from "../use-case/create-user";
import { listUsersController } from "../use-case/list-user";

export async function userAuth(app: FastifyInstance) {
    app.get('/auth', async (req, res) => {
        return await listUsersController.handler(req, res)
    })

    app.get('/auth/:id', async (req, res) => {
        const paramsSchema = z.object({
            id: z.string()
        })

        const { id } = paramsSchema.parse(req.params)

        const user = await prisma.user.findUniqueOrThrow({
            where: {
                id,
            }
        })

        return user
    })

    app.post('/auth', async (req, res) => {
        return await createUserController.handler(req, res)
    })

    app.put('/auth/:id', async (req, res) => {
        const paramsSchema = z.object({
            id: z.string()
        })

        const { id } = paramsSchema.parse(req.params)

        const bodySchema = z.object({
            name: z.string(),
            email: z.string(),
            password: z.string()
        })

        const { name, email, password } = bodySchema.parse(req.body)

        const userUpdate = await prisma.user.update({
            where: {
                id,
            },

            data: {
                name, 
                email,
                password
            }
        })

        return userUpdate
    })

    app.delete('/auth/:id', async (req, res) => {
        const paramsSchema = z.object({
            id: z.string()
        })

        const { id } = paramsSchema.parse(req.params)

        const userDelete = await prisma.user.delete({
            where: {
                id,
            }
        })

        return userDelete
    })
}