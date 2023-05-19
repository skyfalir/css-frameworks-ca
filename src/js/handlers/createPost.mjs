import { create } from "../posts/index.mjs";

export function setPostFormListener(){
    const form = document.querySelector('#createPostForm');

    if (form){
    form.addEventListener('submit', (event) =>{
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const post = Object.fromEntries(formData.entries())

        create(post);
    });
  }
}