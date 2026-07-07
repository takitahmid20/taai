/**
 * API Configuration
 * Uses VITE_API_BASE_URL from environment variables.
 */

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://5zcs6sz7-8080.asse.devtunnels.ms";

export const ENDPOINTS = {
  // Auth
  AUTH_SIGNUP: "/auth/signup",
  AUTH_LOGIN: "/auth/login",

  // User Profile
  USER_ME: "/users/me",

  // Students
  STUDENTS: "/students",
  STUDENT: (studentId: string) => `/students/${studentId}`,

  // Assignments
  ASSIGNMENTS: "/assignments",
  ASSIGNMENT: (assignmentId: number) => `/assignments/${assignmentId}`,

  // Questions
  QUESTIONS_UPLOAD: (assignmentId: number) => `/assignments/${assignmentId}/questions/upload`,
  QUESTIONS: (assignmentId: number) => `/assignments/${assignmentId}/questions`,
  QUESTION_UPDATE: (questionId: number) => `/assignments/${questionId}/questions`,
  QUESTION_DELETE: (questionId: number) => `/assignments/${questionId}/questions`,

  // Rubrics
  RUBRICS_UPLOAD: (assignmentId: number) => `/assignments/${assignmentId}/rubrics/upload`,
  RUBRICS: (assignmentId: number) => `/assignments/${assignmentId}/rubrics`,
  RUBRIC_UPDATE: (rubricId: number) => `/assignments/${rubricId}/rubrics`,
  RUBRIC_DELETE: (assignmentId: number, rubricId: number) => `/assignments/${assignmentId}/rubrics/${rubricId}`,

