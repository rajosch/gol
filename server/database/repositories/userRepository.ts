import prisma from './client'
import { IUser } from '~~/types/IUser'

export async function getUserByEmail(email: string) {
    return await prisma.user.findUnique({
        where: {
            email: email
        },
        select: {
            id: true,
            username: true,
            password: true
        }
    })
}

export async function getUserByUserName(username: string) {
    return await prisma.user.findUnique({
        where: {
            username: username
        },
        select: {
            id: true,
            username: true
        }
    })
}

export async function createUser(data: IUser): Promise<IUser> {
    const user =  await prisma.user.create({
        data: {
            id: data.id,
            username: data.username,
            email: data.email,
            password: data.password
        }
    }) as unknown as IUser
    return user
}