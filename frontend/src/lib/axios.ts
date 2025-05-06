// // lib/axios.ts
// import axios from "axios";

// export const api = axios.create({
//   baseURL: "http://localhost:8000",
//   withCredentials: true, // クッキー送受信を有効にする
// });

// lib/axios.ts
import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
});
