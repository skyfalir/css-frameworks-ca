import { setRegisterFormListener } from "../src/js/api/handlers/register.mjs";
import { setloginFormListener } from "../src/js/api/handlers/login.mjs";

const path = location.pathname;

if (path === "/profile/login/") {
	setloginFormListener();
} else if (path === "/profile/register/") {
	setRegisterFormListener();
}