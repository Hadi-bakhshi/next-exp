const config = {
    env: process.env.NODE_ENV,
    baseURL: "http://localhost:4000",
    apiHeaders: {
      "Content-type": "application/json",
    },
    endpoints: {
      auth: {
        login: "/api/user/login",
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