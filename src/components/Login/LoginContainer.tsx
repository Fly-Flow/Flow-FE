"use client";

import LoginPresentation from "@/components/Login/LoginPresentation.tsx";
import { successAlert, warningAlert } from "@/library/sweetAlert.tsx";
import { useState } from "react";
import { loginRequest } from "@/app/api/login";
import { useRouter } from "next/navigation";
import { setCookie } from "@/utils/cookie";

const Login = () => {
  const router = useRouter();
  const [employeeNumber, setEmployeeNumber] = useState("");
  const [password, setPassword] = useState("");

  // 사원번호 입력 이벤트
  const handleEmployeeNumberInput = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEmployeeNumber(e.target.value);
  };

  // 비밀번호 입력 이벤트
  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  // 로그인 버튼 이벤트
  const handleLogin = async () => {
    // 기본적인 입력 값 검증
    if (!employeeNumber.trim() || !password.trim()) {
      warningAlert("로그인 실패", "사원번호와 비밀번호를 입력하세요.", "확인");
      return;
    }

    try {
      const response = await loginRequest({ employeeNumber, password });
      console.log(response);
      if (response.status === 200) {
        setCookie("flow_token", response.data.accessToken, {
          path: "/",
          maxAge: 3600,
        });
        successAlert("로그인 성공", "로그인에 성공했습니다.", "확인");

        router.push("/");
      } else {
        warningAlert("로그인 실패", "로그인에 실패했습니다.", "확인");
      }
    } catch (error) {
      console.error(error);
      warningAlert(
        "로그인 실패",
        "오류가 발생했습니다. 다시 시도하세요.",
        "확인"
      );
    }
  };

  return (
    <LoginPresentation
      onEmployeeNumberChange={handleEmployeeNumberInput}
      onPasswordChange={handlePasswordInput}
      onClick={handleLogin}
    />
  );
};

export default Login;
