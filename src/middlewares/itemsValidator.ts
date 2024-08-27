import { validationResult } from 'express-validator'
import { ApiNextFunction, ApiRequest, ApiResponse } from '@/interfaces'

export const itemsValidator = (req: ApiRequest, res: ApiResponse, next: ApiNextFunction) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) return res.status(400).json({ ok: false, errors })

    next()
}