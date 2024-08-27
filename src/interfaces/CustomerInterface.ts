import { IUser } from '@/interfaces'

export interface ICustomer {
    createdAt: Date
    updatedAt: Date
    deletedAt: Date
    user: IUser
    nombreComercial: string
    telefonoEmpresa: string
    nombreContacto: string
    telefonoContacto: string
    celularContacto: string
    nombreRepresentanteLegal: string
    correoRepresentanteLegal: string
    correoUsuario: string
    correoOperativo: string
    idArchivoActaConstitutiva: string
    idArchivoProtocolizacionActasAsambleas: string
    idArchivoPoderRepresentanteLegal: string
    idArchivoEscritura: string
    idArchivoComprobanteDomicilio: string
    idArchivoIdentificacionRepresentanteLegal: string
    idArchivoCsfRepresentanteLegal: string
    idArchivoIdentificacionSocios: string
    idArchivoDocSocios: string
    idArchivoCedulaIdentificacionFiscalMoral: string
    idArchivoEstadoCuenta: string
    idArchivoComprobanteGeneracionEFirma: string
    idArchivoCedulaIdentificacion: string
    idArchivoNda: string
}