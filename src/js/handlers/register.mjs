import { register } from "../api/auth/register.mjs";


export async function setRegisterFormListener() {
	const form = document.querySelector("#registerForm");
	form.addEventListener("submit", async (event) => {
		event.preventDefault();
		const form = event.target;
		const formData = new FormData(form);
		const profile = Object.fromEntries(formData.entries());
		try {
			await register(profile);
			window.location.href = "/profile/login/"; // Redirect to /login/ on success
		} catch (error) {
			console.log(error); // Handle error
		}
	});
}
