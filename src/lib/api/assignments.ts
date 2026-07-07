import { apiClient } from "./client";
import { ENDPOINTS } from "./config";

// Types
export type Assignment = {
  id?: number;
  assignment_id?: number;
  teacher_id?: string;
  title: string;
  subject: string;
  topic?: string | null;
  total_marks: number;
  created_at?: string;
};

export type CreateAssignmentPayload = {
  title: string;
  subject: string;
  total_marks: number;
};

export type UpdateAssignmentPayload = {
  title?: string;
  subject?: string;
  topic?: string;
  total_marks?: number;
};

type CreateAssignmentResponse = {
  assignment_id: number;
  message: string;
};

type AssignmentsListResponse = {
  message: string;
  count: number;
  data: Assignment[];
};

