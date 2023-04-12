export const userSessionStorage = () => {
  const getItemSession = (key) => {
    if (typeof window == "undefined") return;

    const response = window.sessionStorage.getItem(key);
    const responseFormatted = response ? JSON.parse(response) : {};
    return responseFormatted;
  };

  const setItemSession = (key, value) => {
    if (typeof window == "undefined") return;

    const valueFormatted = JSON.stringify(value);
    window.sessionStorage.setItem(key, valueFormatted);
  };

  return {
    getItemSession,
    setItemSession,
  };
};
