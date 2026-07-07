export const STUDENTS = [
  { id: "s1", name: "Rahim Ahmed", initials: "RA", institution: "BRAC University" },
  { id: "s2", name: "Nusrat Jahan", initials: "NJ", institution: "Viqarunnisa Noon School" },
  { id: "s3", name: "Tanvir Hasan", initials: "TH", institution: "United International University" },
  { id: "s4", name: "Sadia Islam", initials: "SI", institution: "Notre Dame College" },
  { id: "s5", name: "Farhan Ahmed", initials: "FA", institution: "Dhaka Residential Model College" },
  { id: "s6", name: "Mim Akter", initials: "MA", institution: "Ideal School" },
  { id: "s7", name: "Arif Hossain", initials: "AH", institution: "BRAC University" },
  { id: "s8", name: "Tasnim Rahman", initials: "TR", institution: "Notre Dame College" },
];

export const ASSIGNMENTS = [
  { id: "a1", title: "Newton's Laws of Motion", subject: "HSC Physics", course: "PHY-101", deadline: "Nov 18, 2025", submissions: 42, total: 48, status: "Grading", aiProgress: 82 },
  { id: "a2", title: "Bangla Rachana – দেশপ্রেম", subject: "SSC Bangla", course: "BAN-201", deadline: "Nov 14, 2025", submissions: 35, total: 38, status: "Reviewed", aiProgress: 100 },
  { id: "a3", title: "Normalization & ER Models", subject: "Database Systems", course: "CSE-221", deadline: "Nov 22, 2025", submissions: 28, total: 40, status: "Open", aiProgress: 45 },
  { id: "a4", title: "Argumentative Essay – Climate", subject: "English Composition", course: "ENG-110", deadline: "Nov 12, 2025", submissions: 50, total: 50, status: "Reviewed", aiProgress: 100 },
  { id: "a5", title: "Linear Algebra Problem Set 4", subject: "Mathematics", course: "MAT-201", deadline: "Nov 25, 2025", submissions: 18, total: 45, status: "Open", aiProgress: 22 },
  { id: "a6", title: "Process Scheduling Lab", subject: "Operating Systems", course: "CSE-323", deadline: "Nov 20, 2025", submissions: 31, total: 36, status: "Grading", aiProgress: 68 },
];

export const SUBMISSIONS = [
  { id: "u1", student: "Rahim Ahmed", file: "Rahim_Ahmed_Assignment.pdf", score: 87, confidence: 94, status: "Graded", submittedAt: "2h ago" },
  { id: "u2", student: "Nusrat Jahan", file: "Nusrat_Jahan_Essay.jpg", score: 92, confidence: 89, status: "Graded", submittedAt: "3h ago" },
  { id: "u3", student: "Tanvir Hasan", file: "Tanvir_CSE_Report.pdf", score: 74, confidence: 71, status: "Review", submittedAt: "5h ago" },
  { id: "u4", student: "Sadia Islam", file: "Sadia_Physics_Q1.pdf", score: 81, confidence: 88, status: "Graded", submittedAt: "6h ago" },
  { id: "u5", student: "Farhan Ahmed", file: "Farhan_Newton_Laws.docx", score: 65, confidence: 62, status: "Review", submittedAt: "8h ago" },
  { id: "u6", student: "Mim Akter", file: "Mim_Essay_Final.pdf", score: 90, confidence: 95, status: "Graded", submittedAt: "1d ago" },
];

export const NOTIFICATIONS = [
  { id: "n1", type: "success", title: "AI grading completed", body: "Physics Assignment – 42 submissions evaluated", time: "2 min ago" },
  { id: "n2", type: "warning", title: "12 submissions need manual review", body: "Confidence below 75% threshold", time: "20 min ago" },
  { id: "n3", type: "info", title: "Weak performance detected", body: "Chapter 5 – Newton's Third Law (avg 58%)", time: "1 hr ago" },
  { id: "n4", type: "info", title: "New submission", body: "Farhan Ahmed submitted Newton's Laws", time: "3 hr ago" },
  { id: "n5", type: "success", title: "Report exported", body: "Class performance report ready to download", time: "Yesterday" },
];

