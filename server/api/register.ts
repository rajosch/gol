import { H3Event, sendError } from 'h3'
import { IUser } from '~~/types/IUser'
import { doesUserExist } from '../services/userService'
import bcrypt from 'bcrypt'
import { createUser } from '~~/server/database/repositories/userRepository'

export default defineEventHandler(async (event: H3Event) =>  {
    const body = await readBody(event)
    const username = body.username
    const email: string = body.email
    const password: string = body.password

    console.log(username)

    const userExists = await doesUserExist(email, username)

    if(userExists.value){
        sendError(event, createError({statusCode: 422, statusMessage: userExists.message}))
    }

    const encryptedPassword: string = await bcrypt.hash(password, 10)

    const userData: IUser = {
        username,
        email,
        password: encryptedPassword
    }

    const user = await createUser(userData)

    return user.username
})