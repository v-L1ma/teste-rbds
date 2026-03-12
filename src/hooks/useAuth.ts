import { api } from "@/services/api";
import { useAuthStore } from "@/store/authStore"
import type { loginResponse } from "@/types/loginResponse";
import type { responseBase } from "@/types/responseBase";
import type { User } from "@/types/user";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const useAuth = () => {
    const {userInfo,token,login,logout} = useAuthStore();
    const navigate  = useNavigate();
    const loginMutation = useMutation({
        mutationFn: async (data: {email:string, password:string}) => {
            const response = await api.post<responseBase<loginResponse>>("/auth/login", data);
            return response.data.data;
        },

        onSuccess(data) {
            const user:User = {
                id: data.id,
                email: data.email,
                fullname: data.fullname,
                active: data.active,
                role: data.role,
            };

            const token = data.account.jwt;
            
            if(data.active===false){
                toast.error("Login e/ou senha inválidos.")
                return
            }

            login(user, token);
            toast.success("Login efetuado com sucesso.")
            navigate("/dashboard")
            
        },

        onError() {
            toast.error("Login e/ou senha inválidos.")
        },
    });

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return {
        userInfo,
        token,
        isAuthenticated: token!=null,
        login: loginMutation.mutate,
        logout: handleLogout,
        isLoading: loginMutation.isPending,
        error: loginMutation.error
    }
}