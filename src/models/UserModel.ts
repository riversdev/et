import { Schema, model } from 'mongoose'
import { IUser } from '@/interfaces'

const userSchema = new Schema<IUser>({
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
    role: {
        type: String,
        required: [true, 'El rol es obligatorio'],
        enum: ['USER_ROLE', 'ADMIN_ROLE'],
    },
    person: {
        type: Schema.Types.ObjectId,
        ref: 'Person',
        required: true,
    },
    isActive: {
        type: Boolean,
        required: true,
    },
    email: {
        type: String,
        required: [true, 'El email es obligatorio'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'El password es obligatorio']
    },
    emailConfirmated: {
        type: Boolean,
        default: false,
    },
    img: {
        type: String,
    },
})

userSchema.methods.toJSON = function () {
    const { password, __v, _id, ...doc } = this.toObject()

    return { ...doc, uid: _id }
}

export const User = model('User', userSchema)