const newCommentFormHandler = async (event) => {
  event.preventDefault();

  const comment_body = document.querySelector('#comment').value.trim();
  const blog_id = window.location.toString().split('/')[4];
  //console.log("location =",window.location.toString());
 // console.log("value entered id= ", id);

  if (comment_body) {
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({comment_body,blog_id}),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response);

    if (response.ok) {
      document.location.replace(`/blog/${blog_id}`);
    } else {
      alert('Failed to create post');
    }
  }
};
  
  document
    .querySelector('.new-comment-form')
    .addEventListener('submit', newCommentFormHandler);
