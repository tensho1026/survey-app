"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, RegisterInput } from "../lib/register";
import { api } from "../lib/axios";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
  });

  const handleRegister = async (data: RegisterInput) => {
    try {
      await api.get("/sanctum/csrf-cookie");
      const res = await api.post("/api/register", data);
      console.log("登録成功:", res.data);
    } catch (err) {
      console.error("登録失敗:", err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleRegister)}
      className='space-y-4 max-w-md mx-auto'
    >
      <h2 className='text-xl font-bold'>新規登録</h2>

      <input
        {...register("name")}
        placeholder='名前'
        className='w-full border px-3 py-2 rounded'
      />
      {errors.name && (
        <p className='text-sm text-red-500'>{errors.name.message}</p>
      )}

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
        type='password'
        placeholder='パスワード'
        className='w-full border px-3 py-2 rounded'
      />
      {errors.password && (
        <p className='text-sm text-red-500'>{errors.password.message}</p>
      )}

      <button
        type='submit'
        className='bg-blue-500 text-white px-4 py-2 rounded'
      >
        登録
      </button>
    </form>
  );
}
