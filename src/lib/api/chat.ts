import { apiClient } from "./client";
import { ENDPOINTS } from "./config";

export type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

type ChatResponse = {
  message: string;
  data: {
    response: string;
  };
};

