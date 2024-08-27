import jsonwebtoken from 'jsonwebtoken'
import { getEnvVariables } from '@/helpers'

const { SECRETKEY } = getEnvVariables()

export const generateJWT = (uid: string = '') => new Promise((resolve, reject) => {
    const payload = { uid }

    jsonwebtoken.sign(
        payload,
        SECRETKEY,
        { expiresIn: '4h' },
        (error, token) => {
            if (error) {
                console.log(error)
                reject('Imposible generar el token')
            } else {
                resolve(token)
            }
        }
    )
})