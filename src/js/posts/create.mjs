import { API_SOCIAL_URL } from "../api/constants.mjs";
import { authFetch } from "./authFetch.mjs";

const actions = "/posts"
const method = "post"

export async function create(postData) {
    const createPostURL = API_SOCIAL_URL + actions;

    const response = await authFetch(createPostURL, {
        method,
        body: JSON.stringify(postData)
    })

    return await response.json()
}