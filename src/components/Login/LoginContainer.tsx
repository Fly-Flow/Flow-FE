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
    // 로그인 정보
    const loginInfo = {
      employeeNumber,
      password,
    };

    try {
      const response = await axios({
        method: "POST",
        url: "/api/login",
        data: loginInfo,
      });

      if (response.data !== "no") {
        localStorage.setItem("response", response.data);
        localStorage.setItem("employeeNumber", loginInfo.employeeNumber);
        successAlert("로그인 성공", "환엽합니다!", "확인").then(() => {
          window.location.href = "/";
        });
      } else {
        warningAlert(
          "로그인 실패",
          "아이디 또는 비밀번호가 올바르지 않습니다.",
          "확인"
        );
      }
    } catch (error) {
      console.log(error);
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
