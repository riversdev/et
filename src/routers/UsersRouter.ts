import { Router } from 'express'
import { check } from 'express-validator'
import { deleteUser, getUsers, getUser, postUser, putUser } from '@/controllers'
import { itemsValidator, validateJWT, validateRoles } from '@/middlewares'

export const usersRouter = Router()

usersRouter.get('/', [validateJWT], getUsers)

usersRouter.get(
    '/:id',
    [
        validateJWT,
        check('id', 'El id debe ser un id de mongo').isMongoId(),
        itemsValidator,
    ],
    getUser
)

usersRouter.post(
    '/',
    [
        validateJWT,
        check('email', 'El email es obligatorio').not().isEmpty().isEmail(),
        check('password', 'El password es obligatorio y de mas de 6 caracteres').not().isEmpty().isLength({ min: 6 }),
        itemsValidator,
    ],
    postUser
)

usersRouter.put(
    '/:id',
    [
        validateJWT,
        check('id', 'El id debe ser un id de mongo').isMongoId(),
        itemsValidator,
    ],
    putUser
)

usersRouter.delete(
    '/:id',
    [
        validateJWT,
        validateRoles(['ADMIN_ROLE']),
        check('id', 'El id debe ser un id de mongo').isMongoId(),
        itemsValidator,
    ],
    deleteUser
)