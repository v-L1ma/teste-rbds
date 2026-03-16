import { api } from "@/services/api";
import { useAuthStore } from "@/store/authStore";
import type { responseBase } from "@/types/responseBase";
import type { User } from "@/types/user";
import { useQuery } from "@tanstack/react-query";
import { is } from "zod/v4/locales";

// Tentei usar a rota para pegar as infos do usuario mas aparentemente só um usuario com permissao de staff consegue 
// Vou deixar ela aqui só para fins de conhecimento mesmo
const fetchUserProfile = async (user_id:string) =>{
    const { data } = await api.get<responseBase<User>>(`/users/${user_id}`)
    return data.data;
}

export const useProfile = () => {
    const {userInfo} = useAuthStore();
    const userId = userInfo?.id;

    const query = useQuery(
        {
            queryKey: ["profile", userId],
            queryFn: ()=>fetchUserProfile(userId!),
            enabled: !!userId,
            staleTime: 1000 * 60 * 10
        }
    );
    return {
        profile: query.data ?? null
    }
}


