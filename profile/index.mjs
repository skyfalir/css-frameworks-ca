import { setRegisterFormListener } from "../src/js/api/handlers/register.mjs";
import { setloginFormListener } from "../src/js/api/handlers/login.mjs";
import * as templates from "../src/js/api/templates/index.mjs";
import * as postmethod from "../src/js/api/posts/index.mjs";

const path = location.pathname;

if (path === "/profile/login/") {
	setloginFormListener();
} else if (path === "/profile/register/") {
	setRegisterFormListener();
}

async function testPost() {
	const posts = await postmethod.getPosts();
  const post =  await postmethod.get(53);
  const container = document.querySelector("#userPost")
	templates.renderPostTemplates(posts,container);
}

testPost();
