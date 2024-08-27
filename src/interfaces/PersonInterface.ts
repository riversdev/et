import { IUser } from '@/interfaces'

export interface IPerson {
    createdAt: Date
    updatedAt?: Date
    deletedAt?: Date
    user: IUser
    tipo: 'FISICA' | 'MORAL'
    razonSocial: string
    nombre: string
    apellidoPaterno: string
    apellidoMaterno: string
    fechaNacimiento: Date
    correoElectronico: string
    rfc: string
    ocupacion: string
    domicilio: string
}