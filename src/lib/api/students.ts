import { apiClient } from "./client";
import { ENDPOINTS } from "./config";

// Types
export type Student = {
  teacher_id: string;
  id: string;          // UUID (internal)
  student_id: string;  // Human-readable student ID — used in API path params
  name: string;
  created_at: string;
};

export type CreateStudentPayload = {
  student_id: string;
  name: string;
};

export type UpdateStudentPayload = {
  student_id?: string;
  name?: string;
};

type StudentsListResponse = {
  message: string;
  count: number;
  data: Student[];
};

type StudentResponse = {
  message: string;
  data: Student;
};

// API calls
export async function getStudents() {
  return apiClient<StudentsListResponse>(ENDPOINTS.STUDENTS);
}

export async function getStudent(studentId: string) {
  return apiClient<StudentResponse>(ENDPOINTS.STUDENT(studentId));
}

