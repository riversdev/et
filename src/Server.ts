import express, { Express } from 'express'
import cors from 'cors'
import fileUpload from 'express-fileupload'
import { dbConnection } from '@/db'
import { authRouter, usersRouter } from '@/routers'
import { getEnvVariables } from '@/helpers'

const { PORT } = getEnvVariables()

export class Server {
    app: Express
    port: string

    constructor() {
        this.app = express()
        this.port = PORT

        dbConnection()

        this.middlewares()
        this.routers()
        this.listener()
    }

    middlewares = () => {
        this.app.use(cors()) // cors
        this.app.use(express.json()) // lectura y parseo del body
        this.app.use(express.static('public')) // directorio publico
        this.app.use(fileUpload({ useTempFiles: true, tempFileDir: '/tmp/', createParentPath: true })) // FileUpload carga de archivos
    }

    routers = () => {
        this.app.use('/api/auth', authRouter)
        this.app.use('/api/users', usersRouter)
    }

    listener = () => this.app.listen(this.port, () => console.log(`Server online in port ${this.port}`))
}