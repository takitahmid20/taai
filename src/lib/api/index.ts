// Config
export { API_BASE_URL, ENDPOINTS } from "./config";

// Client
export { apiClient } from "./client";

// Auth
export { signup, login } from "./auth";
export type { AuthUser, AuthResponse, SignupPayload, LoginPayload } from "./auth";

// User
export { getProfile, updateProfile } from "./user";
export type { UserProfile, UpdateProfilePayload } from "./user";

// Students
export { getStudents, getStudent, createStudent, updateStudent, deleteStudent, getStudentAssignments } from "./students";
export type { Student, CreateStudentPayload, UpdateStudentPayload, StudentAssignmentMark } from "./students";

// Assignments
export { getAssignments, createAssignment, getAssignment, updateAssignment, deleteAssignment } from "./assignments";
export type { Assignment, CreateAssignmentPayload, UpdateAssignmentPayload } from "./assignments";

// Questions
export { uploadQuestions, getQuestions, updateQuestion, deleteQuestion } from "./questions";
export type { Question, UpdateQuestionPayload } from "./questions";

