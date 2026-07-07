import { API_BASE_URL } from "./config";
import { getToken, clearToken } from "@/lib/auth";

type RequestOptions = {
  method?: "GET" | "POST" | "PATCH" | "DELETE";
  body?: Record<string, unknown> | FormData;
  headers?: Record<string, string>;
  /** Skip adding Authorization header */
  public?: boolean;
};

type ApiResponse<T> = {
  data: T | null;
  error: string | null;
  status: number;
};

/**
 * Core API client that handles:
 * - Base URL resolution
 * - JWT token injection
 * - JSON/FormData content type handling
 * - Error normalization
 * - 401 auto-logout
 */
export async function apiClient<T = unknown>(
  endpoint: string,
  options: RequestOptions = {}
): Promise<ApiResponse<T>> {
  // Skip API calls during SSR — data fetching happens client-side only
  if (typeof window === "undefined") {
    return { data: null, error: null, status: 0 };
  }

  const { method = "GET", body, headers = {}, public: isPublic = false } = options;

  const url = `${API_BASE_URL}${endpoint}`;

  const requestHeaders: Record<string, string> = { ...headers };

  // Add auth token for protected routes
  if (!isPublic) {
    const token = getToken();
    if (token) {
      requestHeaders["Authorization"] = `Bearer ${token}`;
    }
  }

