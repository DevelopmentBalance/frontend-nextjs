import axios from "axios";

import { getService, postService } from "./api";

export const useBankService = () => {
  const getBank = async (bankId, page, perPage) => {
    const response = await getService(
      `bank/${bankId}?page=${page}&per_page=${perPage}`
    );
    return response;
  };

  return {
    getBank,
  };
};

export const sendCodeByEmailNubank = async (payload) => {
  const response = await postService("nubank/send-email-code", payload);
  return response;
};

export const authNubank = async (payload) => {
  const response = await postService("nubank/auth", payload);
  return response;
};

export const loginBancoOriginal = async () => {
  const response = await getService("banco-original/login");
  return response;
  // const response = await axios.get(
  //   "https://oauth-openbanking.original.com.br/auth-pf/v1/grant-code",
  //   {
  //     // headers: {
  //     //   "Acess-Control-Allow-Origin": "*",
  //     //   location: "dasdasds",
  //     // },
  //     params: {
  //       response_type: "code",
  //       client_id: "4a05bff7-6339-4a75-b99c-cc445d9866e4",
  //       redirect_uri:
  //         "https://xfdewphuedg6qmsoha4ngq3kha0gkxdq.lambda-url.sa-east-1.on.aws/banco-original/uri",
  //     },
  //   }
  // );

  // console.log("response >>>>>", response?.location);

  // return response;
};
