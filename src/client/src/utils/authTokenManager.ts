export const authTokenManager = (function () {
  return {
    getToken: () => {
      return window.localStorage.getItem('accessToken');
    },
    setToken: (newToken: string) => {
      window.localStorage.setItem('accessToken', newToken);
    },
    deleteToken: () => {
      window.localStorage.removeItem('accessToken');
    },
  };
})();
