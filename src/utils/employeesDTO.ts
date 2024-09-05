export interface Employee {
  employeeNumber: string;
  name: string;
  department: string;
  position: string;
  joinDate: string;
  role: string;
}

export const employees: Employee[] = [
  {
    employeeNumber: "1234123001",
    name: "김철수",
    department: "개발팀",
    position: "리드",
    joinDate: "2020-01-15",
    role: "관리자",
  },
  {
    employeeNumber: "1234123002",
    name: "이영희",
    department: "인사팀",
    position: "사원",
    joinDate: "2021-07-10",
    role: "사원",
  },
  {
    employeeNumber: "1234123003",
    name: "박민수",
    department: "디자인팀",
    position: "팀장",
    joinDate: "2019-11-05",
    role: "사원",
  },
];

export const departments = [
  { label: "개발팀", value: "개발팀" },
  { label: "인사팀", value: "인사팀" },
  { label: "디자인팀", value: "디자인팀" },
  { label: "영업팀", value: "영업팀" },
  { label: "회계팀", value: "회계팀" },
];

export const positions = [
  { label: "리드", value: "리드" },
  { label: "팀장", value: "팀장" },
  { label: "사원", value: "사원" },
];

export const roles = [
  { position: "리드", role: "관리자" },
  { position: "팀장", role: "관리자" },
  { position: "사원", role: "사원" },
];
