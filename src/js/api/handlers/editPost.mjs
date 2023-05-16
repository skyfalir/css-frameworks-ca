import { update } from "../posts/index.mjs";

export function setEditPostFormListener(){
    const form = document.querySelector('#editPostForm');

    const url = new URL(location.href);
    const id = url.searchParams.get("id");

    if (form){
    form.addEventListener('submit', (event) =>{
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const post = Object.fromEntries(formData.entries())
        post.id = id;

        update(post);
    });
  }
}