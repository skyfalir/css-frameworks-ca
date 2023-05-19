import { API_SOCIAL_URL } from '../constants.mjs';
import * as storage from '../../handlers/storage/index.mjs';

/**
 * sets up post request with user details.
 * upon successful login, stores access token and profile details and redirects user to their profile.
 */
const action = '/auth/login';
const method = 'post';

export async function login(profile) {
	const loginURL = API_SOCIAL_URL + action;
	const body = JSON.stringify(profile);

	const response = await fetch(loginURL, {
		headers: {
			'content-Type': 'application/json',
		},
		method,
		body,
	});

	if (response.ok) {
		// Login was successful, save token and profile, and redirect user
		const { accessToken, ...user } = await response.json();
		storage.save('token', accessToken);
		storage.save('profile', user);
		window.location.href = '/feed/';
	} else {
		// Login failed, display error message to user
		const showError = document.querySelector('#showError');
		showError.innerHTML = 'Something went wrong with the login. Please try again.';
		console.log(
			`Login failed with status ${response.status}: ${response.statusText}`
		);
	}
}
