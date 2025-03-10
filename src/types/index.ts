export interface User {
    name: string;
    email: string;
    profilePicture: string;
  }
  
  export interface UsersResponseData {
    users: User[];
    totalUsers?: number;
    totalPages?: number;
    currentPage?: number;
  }
  
  export interface UsersResponse {
    users: UsersResponseData;
  }