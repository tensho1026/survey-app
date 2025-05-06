import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(1, "名前は必須です"),
  email: z.string().email("有効なメールアドレスを入力してください"),
  password: z.string().min(6, "6文字以上で入力してください"),
});

export type RegisterInput = z.infer<typeof registerSchema>;
