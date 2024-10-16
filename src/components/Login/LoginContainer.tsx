"use client";

import LoginPresentation from "@/components/Login/LoginPresentation.tsx";
import { successAlert, warningAlert } from "@/library/sweetAlert.tsx";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [employeeNumber, setEmployeeNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");

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

    // 로그인 정보
    const loginInfo = {
      employeeNumber,
      password,
    };

    try {
      const response = await axios.post("/api/login", loginInfo);

      if (response.status === 200) {
        localStorage.setItem("response", response.data);
        localStorage.setItem("employeeNumber", loginInfo.employeeNumber);
        successAlert("로그인 성공", "환영합니다!", "확인").then(() => {
          window.location.href = "/";
        });
      } else {
        warningAlert(
          "로그인 실패",
          response.data.message || "로그인에 실패했습니다.",
          "확인"
        );
      }
    } catch (error: any) {
      console.log("로그인 중 오류 발생:", error);
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
