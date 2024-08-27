import { Request, Response, NextFunction } from 'express'
// import { IUser } from '@/interfaces'

export interface ApiRequest extends Request {
    // user: IUser
    [key: string]: any
}

export interface ApiResponse extends Response { }

export interface ApiNextFunction extends NextFunction { }