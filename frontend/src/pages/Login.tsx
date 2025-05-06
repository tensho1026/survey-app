"use client";
// import { useState } from "react";
import { api } from "../lib/axios";
import { LoginInput, loginSchema } from "../lib/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie"; // ← 追加

export default function LoginForm() {
  const {
    register,
    handleSubmit,

    formState: { errors },
    // reset,
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  });

  const handleLogin = async (data: LoginInput) => {
    console.log("jfoheq");
    try {
      await api.get("/sanctum/csrf-cookie");

      const csrfToken = Cookies.get("XSRF-TOKEN"); // ← クッキーから取得
      // const res = await api.post("/login", data);
      const res = await api.post("/login", data, {
        headers: {
          "X-XSRF-TOKEN": csrfToken ?? "",
        },
      });
      console.log("ログイン成功:", res.data);

      const userRes = await api.get("/api/user");
      console.log("現在のユーザー:", userRes.data);
    } catch (err) {
      console.log("ログイン失敗:", err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
      className='space-y-4 max-w-md mx-auto'
    >
      <h2 className='text-xl font-bold'>ログイン</h2>

      <input
        {...register("email")}
        placeholder='メールアドレス'
        className='w-full border px-3 py-2 rounded'
      />
      {errors.email && (
        <p className='text-sm text-red-500'>{errors.email.message}</p>
      )}

      <input
        {...register("password")}
        placeholder='パスワード'
        type='password'
        className='w-full border px-3 py-2 rounded'
      />
      {errors.password && (
        <p className='text-sm text-red-500'>{errors.password.message}</p>
      )}

      <button
        type='submit'
        className='bg-blue-500 text-white px-4 py-2 rounded'
      >
        ログイン
      </button>
    </form>
  );
}
