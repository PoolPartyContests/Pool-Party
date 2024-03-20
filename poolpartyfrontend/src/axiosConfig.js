import axios from "axios";

function getCsrfToken() {
  const cookies = document.cookie.split(";");
  console.log(`Cookies string: ${cookies}`);
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith("csrftoken=")) {
      return cookie.split("=")[1];
    }
  }
  return null;
}

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
    "X-CSRFToken": getCsrfToken(),
  },
});

export default axiosInstance;
