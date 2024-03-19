import axios from "axios";

function getCsrfToken() {
  return document.cookie.split("csrftoken=")[1].split(";")[0];
}

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
    "X-CSRFToken": getCsrfToken(),
  },
});

export default axiosInstance;
