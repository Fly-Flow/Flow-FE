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
      if (error.response) {
        // 서버가 응답을 반환했지만 상태 코드가 2xx가 아님
        warningAlert("로그인 오류", error.response.data.error, "확인");
      } else if (error.request) {
        // 요청이 만들어졌으나 응답을 받지 못함
        warningAlert(
          "로그인 오류",
          "서버 응답이 없습니다. 나중에 다시 시도해주세요.",
          "확인"
        );
      } else {
        // 요청 설정 중 오류 발생
        warningAlert("로그인 오류", "로그인 중 오류가 발생했습니다.", "확인");
      }
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
