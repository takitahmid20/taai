import { apiClient } from "./client";
import { ENDPOINTS } from "./config";

// Types
export type Question = {
  id: number;
  question_label: string;
  question_description: string;
  marks: number | null;
  created_at: string;
};

export type UpdateQuestionPayload = {
  question_label?: string;
  question_description?: string;
  marks?: number;
};

type QuestionsListResponse = {
  message: string;
  count: number;
  data: Question[];
};

type QuestionUploadResponse = {
  message: string;
  data: string; // JSON string of extracted questions
};

type QuestionUpdateResponse = {
  message: string;
  data: Question;
};

