import axios from "axios";

const createAPIAuth = () => {
  const axiosInstance = axios.create({
    baseURL: "http://localhost:8080/",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  return axiosInstance;
};

const apiAuth = createAPIAuth();

export const AuthServices = {
  postRegisterUser(values) {
    return apiAuth.post(`user/register`, {
      email: values.email,
      password: values.password,
      first_name: values.first_name,
      last_name: values.last_name,
    });
  },
};
