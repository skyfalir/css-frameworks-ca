import * as templates from '../src/js/templates/index.mjs';
import * as postmethod from '../src/js/posts/index.mjs';
import * as listeners from '../src/js/handlers/index.mjs';

const path = location.pathname;


if (path === '/login/') {
	listeners.setloginFormListener();
} else if (path === '/register/') {
	listeners.setRegisterFormListener();
} else if (path === '/feed/' || path === '/posts/') {

	listeners.setPostFormListener();


	async function showPosts() {
		const urlParams = new URLSearchParams(window.location.search);
		const id = urlParams.get('id');
		const postsContainer = document.querySelector('#userPost')
	
		if (id) {
			try {
				const post = await postmethod.get(id)
				templates.renderPostTemplate(post, postsContainer);
			} catch (error) {
				console.error(error);
			}
		} else {
			try {
				const posts = await postmethod.getPosts();
				templates.renderPostTemplates(posts, postsContainer);
			} catch (error) {
				console.error(error);
			}
		}
		
	}

	showPosts();

} else if (path === '/posts/edit/'){
	listeners.setEditPostFormListener();
	const deleteButton = document.querySelector('#deleteButton');
	deleteButton.addEventListener('click', postmethod.remove(id));

	}
