import { API_SOCIAL_URL } from "../api/constants.mjs";
import { authFetch } from "./authFetch.mjs";

const actions = "/posts"
const method = "put"

export async function update(postData) {

    const createPostURL = `${API_SOCIAL_URL}${actions}/${postData.id}`

    const response = await authFetch(createPostURL, {
        method,
        body: JSON.stringify(postData)
    })

    return await response.json()
}