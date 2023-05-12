import { useState } from "react";
import { useRouter } from "next/router";

import { useApp } from "@/application/context";
import { registerUser } from "@/infrastructure/services/user-service";
import { registerSchema } from "./registerSchema";

export const useRegister = () => {
  const { push } = useRouter();
  const { showToastMessage } = useApp();
  const [isSubmitting, setSubmitting] = useState(false);
  const [agreeRule, setAgreeRule] = useState(false);
  const [data, setData] = useState({
    [registerSchema.surname.name]: "",
    [registerSchema.fullname.name]: "",
    [registerSchema.email.name]: "",
    [registerSchema.password1.name]: "",
    [registerSchema.password2.name]: "",
  });

  const onSubmit = async () => {
    setSubmitting(true);
    const response = await registerUser(data);
    setSubmitting(false);

    if (!response?.success) {
      showToastMessage("Erro ao tentar realizar cadastro", "msgError");
      return;
    }

    showToastMessage("Cadastro realizado com sucesso, realize o login");
    push("/");
    return;
  };

  const getFieldDefaultProps = (key) => ({
    name: registerSchema[key]?.name,
    label: registerSchema[key]?.label,
    placeholder: registerSchema[key]?.placeHolder,
    value: data[key],
    onChange: (event) => {
      setData({
        ...data,
        [key]: event?.target?.value,
      });
    },
  });

  const isAvailableToSubmit =
    agreeRule &&
    data[registerSchema.surname.name] &&
    data[registerSchema.fullname.name] &&
    data[registerSchema.email.name] &&
    data[registerSchema.password1.name] &&
    data[registerSchema.password2.name];

  return {
    onSubmit,
    registerSchema,
    getFieldDefaultProps,
    isSubmitting,
    agreeRule,
    setAgreeRule,
    isAvailableToSubmit,
  };
};
