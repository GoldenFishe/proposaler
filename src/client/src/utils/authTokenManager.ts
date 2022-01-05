export const authTokenManager = (function () {
  let token: string = '';

  return {
    getToken: () => token,
    setToken: (newToken: string) => (token = newToken),
  };
})();
