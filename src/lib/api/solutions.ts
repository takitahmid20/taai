import { apiClient } from "./client";
import { ENDPOINTS } from "./config";

// Types
export type Solution = {
  id: number;
  question_label: string;
  solution_text: string;
  created_at: string;
};

export type UpdateSolutionPayload = {
  question_label?: string;
  solution_text?: string;
};

type SolutionsListResponse = {
  message: string;
  count: number;
  data: Solution[];
};

type SolutionUploadResponse = {
  message: string;
  data: string; // JSON string of extracted solutions
};

type SolutionUpdateResponse = {
  message: string;
  data: Solution;
};

