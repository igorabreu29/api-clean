import fastify from 'fastify'
import { userAuth } from './routes/auth'

const app = fastify()

app.register(userAuth)

app.listen({
    port: 3333
}, () => {
    console.log('Server running on http://localhost:3333')
})