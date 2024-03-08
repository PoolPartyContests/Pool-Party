import axios from "axios";
import Cookies from "js-cookie";

const csrftoken = Cookies.get("csrftoken");

const axiosInstance = axios.create({
  xsrfCookieName: "csrftoken",
  xsrfHeaderName: "X-CSRFToken",
  withCredentials: true,
  headers: {
    "X-CSRFToken": csrftoken,
  },
});

export default axiosInstance;
