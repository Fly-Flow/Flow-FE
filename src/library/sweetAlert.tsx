import theme from "@/styles/theme.ts";
import Swal, { SweetAlertResult } from "sweetalert2";

export const successAlert = (
  title: string,
  text: any,
  confirmButtonText: string
): Promise<SweetAlertResult<any>> => {
  return Swal.fire({
    title: title,
    text: text,
    icon: "success",
    confirmButtonText: confirmButtonText,
  });
};

export const errorAlert = (
  title: string,
  text: any,
  confirmButtonText: string
): Promise<SweetAlertResult<any>> => {
  return Swal.fire({
    title: title,
    text: text,
    icon: "error",
    confirmButtonText: confirmButtonText,
  });
};

export const warningAlert = (
  title: string,
  text: any,
  confirmButtonText: string
): Promise<SweetAlertResult<any>> => {
  return Swal.fire({
    title: title,
    text: text,
    icon: "warning",
    confirmButtonText: confirmButtonText,
  });
};

export const infoAlert = (
  title: string,
  text: any,
  confirmButtonText: string
): Promise<SweetAlertResult<any>> => {
  return Swal.fire({
    title: title,
    text: text,
    icon: "info",
    confirmButtonText: confirmButtonText,
  });
};

export const questionAlert = (
  title: string,
  text: any,
  confirmButtonText: string
): Promise<SweetAlertResult<any>> => {
  return Swal.fire({
    title: title,
    text: text,
    icon: "question",
    confirmButtonText: confirmButtonText,
  });
};

export const confirmAlert = (
  title: string,
  text: any,
  confirmButtonText: string,
  cancelButtonText: string
): Promise<SweetAlertResult<any>> => {
  return Swal.fire({
    title: title,
    text: text,
    icon: "question",
    showCancelButton: true, // cancel 버튼 보이기. 기본은 원래 없음
    confirmButtonColor: theme.palette.info.main, // confrim 버튼 색깔 지정
    cancelButtonColor: theme.palette.error.main, // cancel 버튼 색깔 지정
    confirmButtonText: confirmButtonText, // confirm 버튼 텍스트 지정
    cancelButtonText: cancelButtonText, // cancel 버튼 텍스트 지정
  });
};
