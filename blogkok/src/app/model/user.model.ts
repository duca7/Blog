export interface User {
  _id: string;
  username: string;
  email: string;
  password: string;
  token: string;
  image?: string;
  bio?: string;
}
