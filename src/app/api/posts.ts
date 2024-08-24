export const getPosts = async () => {
  const res = await fetch("http://localhost:4000/api/v1/posts");
  const posts = res.json();
  return posts;
};

export const getPost = async (id: string) => {
  const res = await fetch(`http://localhost:4000/api/v1/posts/${id}`);
  const post = res.json();
  return post;
};

export const createPost = async (post: string) => {
  const res = await fetch("http://localhost:4000/api/v1/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ content: post }),
  });
  const data = await res.json();
  console.log(data);
};

export const deletePost = async (id: string) => {
  const res = await fetch(`http://localhost:4000/api/v1/posts/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getPostsBySearch = async (search: string) => {
  const res = await fetch(`http://localhost:4000/api/v1/posts/search?query=${search}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return data
};
