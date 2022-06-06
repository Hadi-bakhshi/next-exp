const config = {
    env: process.env.NODE_ENV,
    baseURL: "http://192.168.4.208:8000/api/v1",
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