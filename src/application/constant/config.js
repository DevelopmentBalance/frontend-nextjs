const TYPE_STAGES = {
  LOCAL: "LOCAL",
  DEV: "DEV",
};

const STAGE = {
  LOCAL: {
    BASE_URL: "http://127.0.0.1:8000",
  },
  DEV: {
    BASE_URL: "https://xfdewphuedg6qmsoha4ngq3kha0gkxdq.lambda-url.sa-east-1.on.aws",
  },
};

const Config = {
  ROUTES: {
    AUTH: "auth",
    USERS: "users",
  },
  STAGE: STAGE[TYPE_STAGES.DEV],
};

export { Config };
