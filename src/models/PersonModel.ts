import { Schema, model } from 'mongoose'
import { IPerson } from '@/interfaces'

const personSchema = new Schema<IPerson>({
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
    tipo: {
        type: String,
        required: [true, 'El tipo es obligatorio'],
        enum: ['FISICA', 'MORAL'],
    },
    razonSocial: {
        type: String,
        required: [true, 'La razon social es obligatoria'],
    },
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
    },
    apellidoPaterno: {
        type: String,
        required: [true, 'El apellido paterno es obligatorio'],
    },
    apellidoMaterno: {
        type: String,
        required: [true, 'El apellido materno es obligatorio'],
    },
    fechaNacimiento: {
        type: Date,
        required: [true, 'La fecha de nacimiento es obligatoria'],
    },
    correoElectronico: {
        type: String,
        required: [true, 'El correo electronico es obligatorio'],
    },
    rfc: {
        type: String,
        required: [true, 'El rfc es obligatorio'],
        unique: true,
    },
    ocupacion: {
        type: String,
        required: [true, 'La ocupacion es obligatoria'],
    },
    domicilio: {
        type: String,
        required: [true, 'El domicilio es obligatorio'],
    },
})

personSchema.methods.toJSON = function () {
    const { __v, _id, ...doc } = this.toObject()

    return { ...doc, uid: _id }
}

export const Person = model('Person', personSchema)