import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { loginSchema } from "@/schemas/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Controller, useForm } from "react-hook-form"
import { useState } from "react";
import type z from "zod";
import { useAuth } from "@/hooks/useAuth";

export const Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const {login, isLoading} = useAuth()

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit = (data: z.infer<typeof loginSchema> ) => {
    login(data)
  };

  return (
    <div className="w-11/12 md:w-4/6 h-[90vh] border rounded-xl shadow-md mx-auto mt-10 flex overflow-hidden">
      <div className="hidden md:flex w-3/6 bg-amber-400">
      </div>
      <div className="w-3/6 py-14 px-14 flex flex-col items-center justify-between">
        <h2 className="text-2xl font-bold">LOGIN</h2>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full">
           <FieldGroup>
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="email">E-mail<span className="text-red-500 font-bold">*</span></FieldLabel>
                  <Input 
                    {...field}
                    id="email" 
                    type="email" 
                    placeholder="seu@email.com" 
                  />
                  {fieldState.invalid && (
                    <FieldError className="text-sm text-red-500 -mt-3 ml-2" errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="password">Senha<span className="text-red-500 font-bold">*</span></FieldLabel>
                  <InputGroup>
                    <InputGroupInput
                      {...field}
                      id="password" 
                      type={isPasswordVisible ? "text" : "password"} 
                      placeholder="********" 
                    />
                    <InputGroupAddon className="cursor-pointer hover:text-black/60 hover:bg-black/5 flex items-center justify-center w-fit" align="inline-end" onClick={()=>setIsPasswordVisible(!isPasswordVisible)}>
                      {isPasswordVisible ? <EyeOffIcon className="ml-2"/> : <EyeIcon className="ml-2"/>}
                    </InputGroupAddon>
                  </InputGroup>
                  {fieldState.invalid && (
                    <FieldError className="text-sm text-red-500 -mt-3 ml-2" errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
          <p className="text-right cursor-pointer text-blue-500 hover:underline">Esqueceu sua senha?</p>
          <Button disabled={!form.formState.isValid || form.formState.isSubmitting || isLoading} className="w-full font-black disabled:opacity-25" variant={"default"} type="submit">
            {(form.formState.isSubmitting || isLoading) ? "Entrando..." : "Entrar"}
          </Button>
        </form>
        <div>
          <p>Não tem uma conta? <a className="cursor-pointer text-blue-500 hover:underline">Cadastre-se</a></p>
        </div>
      </div>
    </div>
  );
};
