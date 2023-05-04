import request from "./request";

import { Config } from "@/application/constant";

const { STAGE } = Config;

const configHeaderJSON = { headers: { "content-type": "application/json" } };

export const getService = async (path, params) => {
  const url = `${STAGE.BASE_URL}/${path}`;

  if (params) params = { ...params };

  return await request.get(url, { params });
};

export const postService = async (path, body) => {
  const url = `${STAGE.BASE_URL}/${path}`;
  return await request.post(url, body, configHeaderJSON);
};

// export const putService = (path, obj) => {
//   const url = `${window.__.endpoints.base}/${path}`;
//   return request.put(url, obj);
// };

// export const deleteService = (path, obj) => {
//   const url = `${window.__.endpoints.base}/${path}`;
//   return request.delete(url, obj);
// };
