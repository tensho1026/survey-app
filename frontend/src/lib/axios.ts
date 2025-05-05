// lib/axios.ts
import axios from "axios";

export const api = axios.create({
  baseURL: "http://127.0.0.1:8000", // LaravelのAPI URL
  withCredentials: true, // クッキー送受信を有効にする
});
