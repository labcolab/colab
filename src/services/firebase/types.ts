// define read/write types for firestore

export enum Collections {
  Posts = 'posts',
  Users = 'users',
}

export interface PostType {
  title: string;
  description: string;
  roles: string[];
  images: string[];
}
