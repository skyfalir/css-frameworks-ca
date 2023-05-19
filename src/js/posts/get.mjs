
import { API_SOCIAL_URL } from "../api/constants.mjs";
import { authFetch } from "./authFetch.mjs";

const actions = "/posts"


export async function get(id) {
    if (!id){
        throw new Error("Missing post Id")
    }
    const getPostURL = `${API_SOCIAL_URL}${actions}/${id}`;

    const response = await authFetch(getPostURL)

    return await response.json()
    
}

export async function getPosts() {
    const getPostURL = `${API_SOCIAL_URL}${actions}/`;

    const response = await authFetch(getPostURL)

    return await response.json()
}