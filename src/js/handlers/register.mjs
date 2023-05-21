import { register } from '../api/auth/register.mjs';

/**
 * Sets a listener on the register form that submits the form data to the server for registration.
 *
 * @return {Promise<void>} A Promise that resolves when the registration is successful, and rejects when there's an error.
 */
export async function setRegisterFormListener() {
	const form = document.querySelector('#registerForm');
	form.addEventListener('submit', async (event) => {
		event.preventDefault();
		const form = event.target;
		const formData = new FormData(form);
		const profile = Object.fromEntries(formData.entries());
		try {
			await register(profile);
			window.location.href = '/profile/login/'; // Redirect to /login/ on success
		} catch (error) {
			console.log(error); // Handle error
		}
	});
}
