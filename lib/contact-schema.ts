import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Вкажіть імʼя"),
  phone: z.string().min(6, "Вкажіть телефон"),
  email: z.string().email("Невірний email"),
  message: z.string().max(1000).optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;
