import { z } from "zod";

export const profileSchema = z.object({
  email: z.email("Email inválido"),
  nome: z.string().min(1, "Informe seu nome"),
  ativo: z.string().min(1, "Informe seu status"),
  cargo: z.string().min(1, "Informe seu cargo")
});