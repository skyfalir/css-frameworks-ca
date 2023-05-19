import { get, update } from '../posts/index.mjs';

export async function setEditPostFormListener() {
	let form;
	try {
		form = document.querySelector('#editForm');
	} catch (err) {
		console.log(err);
	}

	const url = new URL(location.href);
	const id = url.searchParams.get('id');

if (form) {

  console.log('form found')

    const post = await get(id);
    form.title.value = post.title;
    form.body.value = post.body;
    form.media.value = post.media;

		form.addEventListener('submit', (event) => {
			event.preventDefault();
			const form = event.target;
			const formData = new FormData(form);
			const post = Object.fromEntries(formData.entries());
			post.id = id;

			update(post);
		});

  }

}
