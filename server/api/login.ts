import bcrypt from 'bcrypt'
import { getUserByEmail } from '../database/repositories/userRepository';
import { sendError, H3Event } from "h3"


export default eventHandler(async (event: H3Event) => {

    const body = await readBody(event)
    try {
        const user = await getUserByEmail(body.email)

        if (user === null) {
        return sendError(event, createError({ statusCode: 401, data:  "user is null"}))
        }

        if (user.password == undefined) {
            return sendError(event, createError({ statusCode: 401, data: "user is undefined" }))
        }

        const isPasswordCorrect = await bcrypt.compare(body.password, user.password)

        if (!isPasswordCorrect) {
            return sendError(event, createError({ statusCode: 401, data: "password incorrect" }))
        }

        return user

    } catch (error: any) {

        return sendError(event, error)
    }
})