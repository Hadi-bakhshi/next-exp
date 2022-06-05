import { Role } from "../Roles/role";

//==============================================================================
// Form Data
//==============================================================================
export interface LoginData {
  username: string;
  password: string;
}
//==============================================================================
// User
//==============================================================================
export interface User {
  id?: string;
  name?: string;
  email?: string;
  avatar?: string;
  role?: Role;
}
//==============================================================================
// State
//==============================================================================

type Status = "idle" | "pending" | "resolved" | "rejected";

export interface AuthState {
  status: Status;
  isAuthenticated: boolean;
  error: string;
  user: User;
}

export interface ErrorState {
  message: string | null;
}

export interface UsersState {
  status: Status;
  mentors: User[];
}
