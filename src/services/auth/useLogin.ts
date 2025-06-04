import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { authApi } from "../../api/authApi";
import { AxiosErrorType } from "../../interfaces/Common";
import { ILoginRequest, ILoginResponse } from "../../interfaces/IAuth";
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
			console.log(err);
    },
    onSettled: () => {
      //toast.success("Eliminado con exito");
    },
    ...mutationOptions,
  });
};
