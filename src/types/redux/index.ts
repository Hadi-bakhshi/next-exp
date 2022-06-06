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
  data?: {
    id?: string;
    name?: string;
    token?: string;
    userName?: string;
    roleId?: number;
    role?: Role;
  };
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