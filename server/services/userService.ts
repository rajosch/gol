import {getUserByEmail,  getUserByUserName} from '~/server/database/repositories/userRepository'

type ExistCheck = {
    value: boolean
    message?: string
}

type RegistrationErrors = {
    emailError?: string
    usernameError?: string
}

export async function doesUserExist(email:string, username: string): Promise<ExistCheck> {
    const emailExists = (await getUserByEmail(email)) !== null
    const userNameExists = (await getUserByUserName(username)) !== null

    const errors: RegistrationErrors = {}

    if(emailExists){
        errors.emailError = `This email, ${email}, is already registered!`
    }

    if(userNameExists){
        errors.usernameError = `This username, ${username}, is already registered!`
    }

    const message = JSON.stringify(errors)

    if(emailExists || userNameExists){
        return {value: true, message}
    }

    return {value: false, message}
}