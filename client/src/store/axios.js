import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000/api"
    : "https://ml-crowdsourcing-platform.herokuapp.com/api";

const axiosInstance = axios.create({ baseURL });

export default axiosInstance;
