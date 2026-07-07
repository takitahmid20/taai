import { apiClient } from "./client";
import { ENDPOINTS } from "./config";
import { setToken } from "../auth";

// Types
export type AuthUser = {
  id: string;
  email: string;
  display_name: string | null;
};

export type AuthResponse = {
  access_token: string;
  token_type: string;
  user: AuthUser;
};

export type SignupPayload = {
  email: string;
  password: string;
  display_name?: string;
};

export type LoginPayload = {
  email: string;
  password: string;
};

