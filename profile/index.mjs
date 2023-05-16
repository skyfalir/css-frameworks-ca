import * as templates from "../src/js/api/templates/index.mjs";
import * as postmethod from "../src/js/api/posts/index.mjs";
import * as listeners from "../src/js/api/handlers/index.mjs";


const path = location.pathname;

if (path === "/profile/login/") {
	listeners.setloginFormListener();
} else if (path === "/profile/register/") {
	listeners.setRegisterFormListener();
} else if ("../feed/"){
	listeners.setPostFormListener();
}

async function testPost() {
	const posts = await postmethod.getPosts();
	const post = await postmethod.get(53);
	const container = document.querySelector("#userPost");
	templates.renderPostTemplates(posts, container);
}

testPost();
