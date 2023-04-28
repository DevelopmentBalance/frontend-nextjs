export const initialStateContext = {
  me: { loading: false },
  user: null,
  isLoading: true,
  userUpdated: false,
};

export const userContextModel = {
  state: initialStateContext,
  dispatch: () => {},
};

export const profileRename = {
  PERFIL_DEFAULT: "default",
};
