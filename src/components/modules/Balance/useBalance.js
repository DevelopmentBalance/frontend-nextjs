import { useState } from "react";

import bankList from "@/assets/icons/bank-white.png";

export const useBalance = () => {
  const [main, setMain] = useState(false);
  const [modal, setModal] = useState(false);

  const listMain = [
    {
      name: "Bancos conectado",
      onClick: (e) => {
        e.stopPropagation();
      },
      icon: bankList,
    },
  ];

  return {
    listMain,
    main,
    modal,
    setMain,
    setModal,
  };
};
