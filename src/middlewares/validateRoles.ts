import { ApiNextFunction, ApiRequest, ApiResponse } from '@/interfaces'

export const validateRoles = (roles: string[] = []) => (req: ApiRequest, res: ApiResponse, next: ApiNextFunction) => {
    const user = req.user

    if (!user) return res.status(500).json({ ok: false, msg: 'No existe el usuario para verificar el role' })

    if (!roles.includes(user.role)) return res.status(401).json({ ok: false, msg: `${user.person.nombre} ${user.person.apellidoPaterno} no tiene permiso` })

    next()
}