import axios from "axios";

import { Config } from "@/application/constant";

const { STAGE } = Config;

const client = axios.create({
  paramsSerializer: (params) => qs.stringify(params, { arrayFormat: "repeat" }),
});

function getToken() {
  return localStorage.getItem("token");
}

client.interceptors.request.use(
  (config) => {
    if (config.url.startsWith(`${STAGE.BASE_URL}/auth`)) {
      delete config.headers.common.Authorization;
    } else {
      if (!config._retry) {
        config.headers.Authorization = `Bearer ${getToken()}`;
      }
    }

    return config;
  },
  (error) => Promise.reject(error)
);

client.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const responseStatus = error.response ? error.response.status : 0;

    if (
      error?.response?.data?.detail === "Signature has expired" ||
      responseStatus === 401
    ) {
      console.log("Unauthorized Access, redirect to login");
      window.location = "/";
    } else {
      console.error("Ocorreu um erro ao processar sua solicitação");
    }

    const hasError =
      !!error.response && !!error.response.data && !error.response.data.success;

    if (hasError) return error.response.data;

    return error;
  }
);

export default client;
