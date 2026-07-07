import { apiClient } from "./client";
import { ENDPOINTS } from "./config";

// Types
export type RubricCriteria = {
  points: number;
  description: string;
};

export type RubricPenalty = {
  deduction: number;
  condition: string;
};

export type RubricDescription = {
  criteria: RubricCriteria[];
  penalties: RubricPenalty[];
  fatal_flaw: string | null;
};

export type Rubric = {
  id: number;
  question_label: string;
  rubric_description: RubricDescription;
  created_at: string;
};

export type UpdateRubricPayload = {
  question_label?: string;
  rubric_description?: RubricDescription;
};

type RubricsListResponse = {
  message: string;
  count: number;
  data: Rubric[];
};

type RubricUploadResponse = {
  message: string;
  data: string; // JSON string of extracted rubrics
};

