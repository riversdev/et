import { Request } from 'express'
import bcryptjs from 'bcryptjs'
import { Person, User } from '@/models'
import { ApiRequest, ApiResponse, IUserPerson } from '@/interfaces'

export const getUsers = async (req: Request<{}, {}, {}, { start: number, limit: number }>, res: ApiResponse) => {
    const { start = 0, limit = 0 } = req.query

    try {
        // const total = await User.countDocuments({ isActive: true })
        // const users = await User.find({ isActive: true }).skip(start).limit(limit)

        const [total, records] = await Promise.all([
            User.countDocuments({ deletedAt: undefined }),
            User.find({ deletedAt: undefined }).skip(start).limit(limit)
        ])

        res.json({ ok: true, total, records })
    } catch (error) {
        console.log(error)
        res.status(500).json({ ok: false, msg: 'Imposible obtener usuarios' })
    }
}

export const getUser = async (req: ApiRequest, res: ApiResponse) => {
    const { id } = req.params

    try {
        const user = await User.findById(id)

        if (!user || !!user.deletedAt) return res.status(404).json({ ok: false, msg: 'Usuario no encontrado' })

        res.json({ ok: true, record: user })
    } catch (error) {
        console.log(error)
        res.status(500).json({ ok: false, msg: 'Imposible obtener usuario' })
    }
}

export const postUser = async (req: ApiRequest, res: ApiResponse) => {
    const userPerson = req.body as IUserPerson

    const person = new Person({
        createdAt: new Date().toISOString(),
        user: req.user.id,
        tipo: userPerson.tipo,
        razonSocial: userPerson.razonSocial,
        nombre: userPerson.nombre,
        apellidoPaterno: userPerson.apellidoPaterno,
        apellidoMaterno: userPerson.apellidoMaterno,
        fechaNacimiento: userPerson.fechaNacimiento,
        correoElectronico: userPerson.email,
        rfc: userPerson.rfc,
        ocupacion: userPerson.ocupacion,
        domicilio: userPerson.domicilio,
    })

    const user = new User({
        createdAt: new Date().toISOString(),
        user: req.user.id,
        role: userPerson.role,
        person: person.id,
        isActive: userPerson.isActive,
        email: userPerson.email,
        password: userPerson.password,
        emailConfirmated: userPerson.emailConfirmated,
        img: userPerson.img,
    })

    try {
        const salt = bcryptjs.genSaltSync()
        user.password = bcryptjs.hashSync(user.password, salt)

        await person.save()
        await user.save()

        res.status(201).json({ ok: true, record: user })
    } catch (error) {
        console.log(error)
        res.status(500).json({ ok: false, msg: 'Imposible guardar usuario' })
    }
}

export const putUser = async (req: ApiRequest, res: ApiResponse) => {
    const { id } = req.params

    try {
        const user = await User.findById(id)

        if (!user || !!user.deletedAt) return res.status(404).json({ ok: false, msg: 'Usuario no encontrado' })

        const person = await Person.findById(user.person)

        if (!person || !!person.deletedAt) return res.status(404).json({ ok: false, msg: 'Usuario no encontrado' })

        user.role = req.body.role
        user.isActive = req.body.isActive
        user.email = req.body.email
        user.emailConfirmated = req.body.emailConfirmated
        user.img = req.body.img
        person.tipo = req.body.tipo
        person.razonSocial = req.body.razonSocial
        person.nombre = req.body.nombre
        person.apellidoPaterno = req.body.apellidoPaterno
        person.apellidoMaterno = req.body.apellidoMaterno
        person.fechaNacimiento = req.body.fechaNacimiento
        person.correoElectronico = req.body.email
        person.rfc = req.body.rfc
        person.ocupacion = req.body.ocupacion
        person.domicilio = req.body.domicilio

        if (req.body.password) {
            const salt = bcryptjs.genSaltSync()
            user.password = bcryptjs.hashSync(req.body.password, salt)
        }

        await Person.findByIdAndUpdate(user.person, person, { new: true })
        const record = await User.findByIdAndUpdate(id, user, { new: true })

        res.json({ ok: true, record })
    } catch (error) {
        console.log(error)
        res.status(500).json({ ok: false, msg: 'Imposible actualizar usuario' })
    }
}

export const deleteUser = async (req: ApiRequest, res: ApiResponse) => {
    const { id } = req.params

    try {
        const user = await User.findByIdAndUpdate(id, { deletedAt: new Date().toISOString() })

        if (!user || !!user.deletedAt) return res.status(404).json({ ok: false, msg: 'Usuario no encontrado' })

        await Person.findByIdAndUpdate(user.person, { deletedAt: new Date().toISOString() })

        res.json({ ok: true })
    } catch (error) {
        console.log(error)
        res.status(500).json({ ok: false, msg: 'Imposible eliminar usuario' })
    }
}