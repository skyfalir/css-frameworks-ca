import { API_SOCIAL_URL } from "../constants.mjs";
import * as storage from "../handlers/storage/index.mjs"


/** 
 * sets up post request with user details.
 * upon successful login, stores access token and profile details and redirects user to their profile.
 */
const action = '/auth/login'
const method = 'post'


export async function login(profile) {
    const loginURL = API_SOCIAL_URL + action;
    const body = JSON.stringify(profile)

   const response = await fetch(loginURL, {
    headers: {
        "content-Type": "application/json"
    },
        method,
        body
    })

    const {accessToken, ...user } = await response.json();

    storage.save("token", accessToken);
    storage.save("profile", user);

    window.location.href = '/profile/'; 
}
