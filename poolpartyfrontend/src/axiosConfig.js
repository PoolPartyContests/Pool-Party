import axios from "axios";
import Cookies from "js-cookie";
function getCsrfToken() {
  const csrftoken = Cookies.get("csrftoken");
  console.log(csrftoken);
  return csrftoken || "";
}
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
    "X-CSRFToken": getCsrfToken(),
  },
});

export default axiosInstance;
