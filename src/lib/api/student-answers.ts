import { apiClient } from "./client";
import { ENDPOINTS } from "./config";

// Types
export type StudentAnswer = {
  id: number;
  question_label: string;
  answer: string;
  created_at: string;
};

export type UpdateStudentAnswerPayload = {
  question_label?: string;
  answer?: string;
};

type StudentAnswersListResponse = {
  message: string;
  count: number;
  data: StudentAnswer[];
};

type StudentAnswerUploadResponse = {
  message: string;
  data: string; // JSON string of extracted answers
};

type StudentAnswerUpdateResponse = {
  message: string;
  data: StudentAnswer;
};

