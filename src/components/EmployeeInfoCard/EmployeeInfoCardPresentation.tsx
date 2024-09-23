"use client";

import BoxShadowContainer from "@/components/shared/BoxShadowContainer/index.tsx";
import { Avatar, Stack, Typography } from "@mui/material";

// 프로필 경로
const profile = [
  {
    gender: "woman",
    src: "/images/profile_woman.svg",
  },
  {
    gender: "man",
    src: "/images/profile_man.svg",
  },
];

const employee = {
  id: "1234123001",
  department: "개발팀",
  position: "주임",
  hireDate: "2020-01-15",
  name: "김철수",
  birth: "19990101",
  phone: "010-1234-5677",
  email: "rlatjswlasdfasdfs@email.com",
  password: "password",
};

// 사원 정보
const employeeInfo = [
  { label: "사원 번호", key: "id" as keyof typeof employee },
  { label: "부서", key: "department" as keyof typeof employee },
  { label: "직급", key: "position" as keyof typeof employee },
  { label: "입사 일자", key: "hireDate" as keyof typeof employee },
];

// 개인 정보
const personalInfo = [
  { label: "이름", key: "name" as keyof typeof employee },
  { label: "생년 월일", key: "birth" as keyof typeof employee },
  { label: "휴대 전화", key: "phone" as keyof typeof employee },
  { label: "이메일", key: "email" as keyof typeof employee },
  { label: "비밀번호", key: "password" as keyof typeof employee },
];

const randomProfile = profile[Math.floor(Math.random() * profile.length)];

const EmployeeInfoCardPresentation: React.FC = () => {
  return (
    <BoxShadowContainer borderRadius="1.625rem">
      <Stack direction="row" padding="2rem" gap="1rem">
        <Avatar src={randomProfile.src} alt={randomProfile.gender} />
        <Typography variant="h6">사원 정보</Typography>
        <Stack spacing={1}>
          {employeeInfo.map((info) => (
            <Stack
              key={info.key}
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                color="text.secondary"
                sx={{ flexShrink: 0, flexBasis: "100px" }}
              >
                {info.label}
              </Typography>

              <Typography sx={{ flexGrow: 1 }}>{employee[info.key]}</Typography>
            </Stack>
          ))}
        </Stack>

        <Typography variant="h6">개인 정보</Typography>
        <Stack spacing={1}>
          {personalInfo.map((info) => (
            <Stack
              key={info.key}
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                color="text.secondary"
                sx={{ flexShrink: 0, flexBasis: "100px" }}
              >
                {info.label}
              </Typography>
              <Typography sx={{ flexGrow: 1 }}>{employee[info.key]}</Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </BoxShadowContainer>
  );
};

export default EmployeeInfoCardPresentation;
