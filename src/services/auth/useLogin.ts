import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { authApi } from "../../api/authApi";
import { AxiosErrorType } from "../../interfaces/Common";
import { ILoginRequest, ILoginResponse } from "../../interfaces/IAuth";
import { toast } from "sonner";
import { TOAST_ERROR } from "@/constants";
export const useLogin = (
  mutationOptions?: UseMutationOptions<
    ILoginResponse,
    AxiosErrorType,
    ILoginRequest,
    unknown
  >
) => {
  return useMutation({
    mutationFn: authApi.login,
    onError: (err) => {
			 toast.error('Error', {
				description: err.response?.data.message || err.message,
				style: TOAST_ERROR
			 });
    },
    ...mutationOptions,
  });
};
