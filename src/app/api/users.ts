export const handleEditUser = async (id: string, name:string) => {
  const res = await fetch(`http://localhost:4000/api/v1/users/edit/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: name }),
  });
  const user = res.json();
  return user;
}
