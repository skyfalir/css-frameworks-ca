import { API_SOCIAL_URL } from "../api/constants.mjs";
import { authFetch } from "./authFetch.mjs";

const actions = "/posts"
const method = "delete"

export async function remove(id) {

    const createPostURL = `${API_SOCIAL_URL}${actions}/${id}`

    const response = await authFetch(createPostURL, {
        method
    })

    return await response.json()
}