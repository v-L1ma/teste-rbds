import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { useProfile } from "@/hooks/useProfile";
import { profileSchema } from "@/schemas/profileForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Controller, useForm} from "react-hook-form";
import { toast } from "sonner";
import type z from "zod";

export const Profile = () => {
    const {profile} = useProfile();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const form = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
        nome: "",
        email: "",
        cargo: "",
        ativo: "",
    },
    })

    useEffect(() => {
        if(profile){
            form.reset({
                nome: profile.fullname,
                email: profile.email,
                cargo: profile.role,
                ativo: profile.active ? "Ativo" : "Inativo"
            })
        }
    }, [profile]);

    return (
        <div>
            <div className="py-5 px-10 bg-white border border-black-/90 rounded-md w-full mt-5">
            <h1 className="text-3xl font-semibold">Perfil</h1>
            <h3 className="text-base text-gray-600">
                Aqui você pode visualizar as informações do seu perfil.
            </h3>
            <hr className="my-5"/>
                <form onSubmit={() => {toast.info("Funcao não implementada!")}} className="flex flex-col gap-4 w-full">
                <FieldGroup>
                     <Controller
                    name="ativo"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor="status">Status<span className="text-red-500 font-bold">*</span></FieldLabel>
                        <Input 
                            {...field}
                            id="status" 
                            type="text" 
                            placeholder="Seu status" 
                            disabled
                        />
                        {fieldState.invalid && (
                            <FieldError className="text-sm text-red-500 -mt-3 ml-2" errors={[fieldState.error]} />
                        )}
                        </Field>
                    )}
                    />
                    <Controller
                    name="nome"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor="nome">Nome<span className="text-red-500 font-bold">*</span></FieldLabel>
                        <Input 
                            {...field}
                            id="nome" 
                            type="text" 
                            placeholder="Seu nome completo" 
                            disabled
                        />
                        {fieldState.invalid && (
                            <FieldError className="text-sm text-red-500 -mt-3 ml-2" errors={[fieldState.error]} />
                        )}
                        </Field>
                    )}
                    />
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
                            disabled
                        />
                        {fieldState.invalid && (
                            <FieldError className="text-sm text-red-500 -mt-3 ml-2" errors={[fieldState.error]} />
                        )}
                        </Field>
                    )}
                    />
                    <Controller
                    name="cargo"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor="cargo">Cargo<span className="text-red-500 font-bold">*</span></FieldLabel>
                        <Input 
                            {...field}
                            id="cargo"
                            type="text" 
                            placeholder="Seu cargo" 
                            disabled
                        />
                        {fieldState.invalid && (
                            <FieldError className="text-sm text-red-500 -mt-3 ml-2" errors={[fieldState.error]} />
                        )}
                        </Field>
                    )}
                    />
                </FieldGroup>
                </form>
            </div>
        </div>
    );
}