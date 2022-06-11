const config = {
    env: process.env.NODE_ENV,
    baseURL: "https://admin.behinekavan.com:6001/api/v1",
    apiHeaders: {
      "Content-type": "application/json",
    },
    endpoints: {
      auth: {
        login: "Users/token",
        createAccount: "/users/create-account",
        logout: "/users/logout",
        me: "/users",
        profile: "/users/profile",
      },
      example1: {},
      example2: {},
      example3: {},
      example4: {},
    },
  };
  
  export default config;