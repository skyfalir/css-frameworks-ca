export function postTemplate(postData) {
	const postWrapper = document.createElement("div");
	postWrapper.classList.add("card-body", "mx-auto", "post");

	const container = document.createElement("div");
	container.classList.add("card-body", "my-2", "text-center");
	postWrapper.appendChild(container);

	/* Title */

	const postTitle = document.createElement("h5");
	postTitle.classList.add(
		"card-title",
		"bg-dark",
		"rounded-top",
		"p-3",
		"m-0",
		"text-secondary"
	);
	postTitle.innerText = postData.title;

	/* link to post */
	const anchor = document.createElement("a");
	anchor.href = '../posts' + `?id=${postData.id}`;
	anchor.appendChild(postTitle);

	container.appendChild(anchor);

	/* Image */

	const postImage = document.createElement("img");
	postImage.classList.add("img-fluid", "rounded-0", "card-img");
	
	const Placeholders = [
	  "https://picsum.photos/301",
	  "https://picsum.photos/302",
	  "https://picsum.photos/303",
	];
	
	if (isValidImageUrl(postData.media)) {
	  postImage.src = postData.media;
	} else {
	  const randomIndex = Math.floor(Math.random() * Placeholders.length);
	  postImage.src = Placeholders[randomIndex];
	}
	
	postImage.alt = "Post Image";
	
	container.appendChild(postImage);
	
	/** 
	 * Check if image is present or otherwise valid, 
	 * before replacing with a placeholder. */
	
	function isValidImageUrl(url) {
	  const imageRegex = /\.(jpeg|jpg|gif|png|svg)$/i;
	  return imageRegex.test(url);
	}
	
	

	/* Body */

	const postBody = document.createElement("p");
	postBody.classList.add("card-text", "mx-auto", "m-0", "p-3", "bg-dark", "text-light");
	postBody.innerText = postData.body;
	container.appendChild(postBody);

	/* Buttons Container */

	const postButtonsContainer = document.createElement("div");
	postButtonsContainer.classList.add(
		"d-flex",
		"justify-content-between",
		"accent",
		"p-md-3",
		"rounded-bottom",
		"align-items-center"
	);

	/* Flair Buttons */

	const postButtonsGroup = document.createElement("div");
	postButtonsGroup.classList.add("btn-group", "p-1");

	const likeButton = document.createElement("button");
	likeButton.classList.add("btn", "btn-sm", "btn-outline-primary");

	likeButton.innerText = "Like";
	postButtonsGroup.appendChild(likeButton);

	const commentButton = document.createElement("button");
	commentButton.classList.add("btn", "btn-sm", "btn-outline-primary");
	commentButton.innerText = "Comment";
	postButtonsGroup.appendChild(commentButton);
	postButtonsContainer.appendChild(postButtonsGroup);

	/* Post Stats */

	const postStats = document.createElement("small");
	postStats.classList.add("text-primary");

	const postLikes = document.createElement("span");
	postLikes.classList.add("me-2");
	postLikes.innerText = "10 likes";
	postStats.appendChild(postLikes);

	const postComments = document.createElement("span");
	postComments.classList.add("me-2");
	postComments.innerText = "5 comments";

	postStats.appendChild(postComments);
	postButtonsContainer.appendChild(postStats);
	container.appendChild(postButtonsContainer);

	return postWrapper;
}

export function renderPostTemplate(postData, parent) {
	parent.append(postTemplate(postData));
}

export function renderPostTemplates(postDataList, parent) {
	parent.append(...postDataList.map(postTemplate));
}
