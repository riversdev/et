import { IPerson } from '@/interfaces'

export interface IUser {
    createdAt: Date
    updatedAt?: Date
    deletedAt?: Date
    user: IUser
    role: 'USER_ROLE' | 'ADMIN_ROLE'
    person: IPerson
    isActive: boolean
    email: string
    password: string
    emailConfirmated: boolean
    img?: string
}

export interface IUserPerson extends IUser, Omit<IPerson, 'correoElectronico'> {

}