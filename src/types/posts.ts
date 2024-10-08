export interface Post {
  id: string;
  content: string;
  created_at: string;
  updated_at: string;
  user_id: string;
  user: User;
  isBookMarked: boolean;
}

export interface User {
  user_id: string;
  name: string;
  email: string;
  provider: string;
  posts: Post[];
}
