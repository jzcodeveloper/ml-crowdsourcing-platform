import socketIOClient from "socket.io-client";

const endpoint =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000"
    : "https://ml-crowdsourcing-platform.herokuapp.com";

export const socket = socketIOClient(endpoint);
