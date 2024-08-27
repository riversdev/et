import { Schema, model } from 'mongoose'
import { ICustomer } from '@/interfaces'

const customerSchema = new Schema<ICustomer>({
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
    nombreComercial: {
        type: String,
        required: true,
    },
    telefonoEmpresa: {
        type: String,
        required: true,
    },
    nombreContacto: {
        type: String,
        required: true,
    },
    telefonoContacto: {
        type: String,
        required: true,
    },
    celularContacto: {
        type: String,
        required: true,
    },
    nombreRepresentanteLegal: {
        type: String,
        required: true,
    },
    correoRepresentanteLegal: {
        type: String,
        required: true,
    },
    correoUsuario: {
        type: String,
        required: true,
    },
    correoOperativo: {
        type: String,
        required: true,
    },
    idArchivoActaConstitutiva: {
        type: String,
        required: true,
    },
    idArchivoProtocolizacionActasAsambleas: {
        type: String,
        required: true,
    },
    idArchivoPoderRepresentanteLegal: {
        type: String,
        required: true,
    },
    idArchivoEscritura: {
        type: String,
        required: true,
    },
    idArchivoComprobanteDomicilio: {
        type: String,
        required: true,
    },
    idArchivoIdentificacionRepresentanteLegal: {
        type: String,
        required: true,
    },
    idArchivoCsfRepresentanteLegal: {
        type: String,
        required: true,
    },
    idArchivoIdentificacionSocios: {
        type: String,
        required: true,
    },
    idArchivoDocSocios: {
        type: String,
        required: true,
    },
    idArchivoCedulaIdentificacionFiscalMoral: {
        type: String,
        required: true,
    },
    idArchivoEstadoCuenta: {
        type: String,
        required: true,
    },
    idArchivoComprobanteGeneracionEFirma: {
        type: String,
        required: true,
    },
    idArchivoCedulaIdentificacion: {
        type: String,
        required: true,
    },
    idArchivoNda: {
        type: String,
        required: true,
    },
})

customerSchema.methods.toJSON = function () {
    const { __v, _id, ...doc } = this.toObject()

    return { ...doc, uid: _id }
}

export const Customer = model('Customer', customerSchema)