import { apiClient } from "./client";
import { ENDPOINTS } from "./config";

// Types
export type UserProfile = {
  id: string;
  email: string;
  display_name: string | null;
  created_at: string;
};

export type UpdateProfilePayload = {
  display_name?: string;
};

