import { IUser } from '@/interfaces'

export interface ICustomerStatus {
    createdAt: Date
    updatedAt: Date
    deletedAt: Date
    user: IUser
    name: string
    step: number
    description: string
}