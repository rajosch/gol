import { deleteCookie } from "h3";

export default eventHandler((event) => {
  deleteCookie(event, 'auth_token')
  return 'user logged out'
})