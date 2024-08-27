import { Schema, model } from 'mongoose'
import { ICustomerStatus } from '@/interfaces'

const customerStatusSchema = new Schema<ICustomerStatus>({
    createdAt: {
        type: Date,
        required: [true, 'La fecha de creacion es obligatoria'],
    },
    updatedAt: {
        type: Date,
    },
    deletedAt: {
        type: Date,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    step: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
    },
})

customerStatusSchema.methods.toJSON = function () {
    const { __v, _id, ...doc } = this.toObject()

    return { ...doc, uid: _id }
}

export const CustomerStatus = model('CustomerStatus', customerStatusSchema)