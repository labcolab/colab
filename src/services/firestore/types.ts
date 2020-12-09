// define read/write types for firestore

export interface Role {
  role: string;
  color: string;
}

// export interface Project {
//   avatar: string;
//   title: string;
//   date: string;
//   description: string;
//   roles: Role[];
//   images: string[];
// }

export interface Project {
  title: string;
  description: string;
  roles: string[]; //TODO
}
