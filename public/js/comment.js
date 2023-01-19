const newCommentFormHandler = async (event) => {
    event.preventDefault();
  
    const comment = document.querySelector('#comment').value.trim();//get the comment from the user
    const id = window.location.toString().split('/')[4];//take the id from the route
    console.log("value entered");
  
    if (comment) {
      const response = await fetch(`/api/comments/${id}`, {
        method: 'POST',
        body: JSON.stringify({comment }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to create post');
      }
    }
  };
  
  
  document
    .querySelector('.new-comment-form')
    .addEventListener('submit', newCommentFormHandler);
