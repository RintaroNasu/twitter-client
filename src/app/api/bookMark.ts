export const postBookMark = async (id: string, uid: string) => {
  const res = await fetch(`http://localhost:4000/api/v1/${id}/bookMark/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ user_id: uid, post_id: id }),
  });
  const bookMark = res.json();
  return bookMark;
};

export const deleteBookMark = async (id: string, uid: string) => {
  const res = await fetch(`http://localhost:4000/api/v1/posts/${id}/bookMark/delete`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ user_id: uid, post_id: id }),
  });
  const bookMark = res.json();
  return bookMark;
};
