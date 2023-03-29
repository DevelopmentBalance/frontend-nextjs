import { useRouter } from "next/router";

import { useApp } from "@/application/context";
import { authenticateUser } from "@/infrastructure/services/auth";
import { loginSchema } from "../loginSchema";

export const useLogin = () => {
  const { showToastMessage } = useApp();
  const { push } = useRouter();

  const onSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);
    const response = await authenticateUser(values.email, values.password);

    if (!response?.token) {
      showToastMessage("Email ou senha incorreto", "msgError");
      setSubmitting(false);
      return;
    }

    showToastMessage("Login realizado com sucesso");
    push("/banks");
    return;
  };

  return {
    onSubmit,
    loginSchema,
  };
};
