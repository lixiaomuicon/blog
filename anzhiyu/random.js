var posts=["posts/2/","posts/4/","posts/1/","posts/43857/","posts/6/","posts/53225/","posts/3/","posts/5/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};