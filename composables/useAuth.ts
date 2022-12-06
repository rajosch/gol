import { useRouter, useState } from "#app";
import { IUser } from "~/types/IUser";

export const useAuthCookie = () => useCookie('auth_token')

export async function registerUser(username: string, email: string, password: string) {
    try {
        const result = await $fetch('/api/register', {
            method: 'POST',
            body: { username, email, password}
        })
        useState('user').value = result
        await useRouter().push('/')
        return result
    } catch(e){
        console.log('error: ' + e)
        return e
    }
}

export async function userLogin(email: string, password: string) {
    try {
      const result = await $fetch('/api/login', { method: 'POST', body: { email: email, password: password } })
  
      if (!result?.id) {
        throw Error('something went wrong')
      }
      useState('user').value = result
      await useRouter().push('/')
  
      return { hasErrors: false, loggedIn: true }
    } catch (error: any) {
      return error
    }
  }

export async function userLogout() {
  await useFetch('/api/logout')
  useState('user').value = null
  await useRouter().push('/')
}