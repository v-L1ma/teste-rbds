import { api } from "@/services/api";
import { useAuthStore } from "@/store/authStore";
import type { responseBase } from "@/types/responseBase";
import { useQuery } from "@tanstack/react-query";

// Tentei usar a rota para pegar as infos do usuario mas aparentemente só um usuario com permissao de staff consegue 
// Vou deixar ela aqui só para fins de conhecimento mesmo
const fetchUserProfile = async (user_id:string) =>{
    return await api.get<responseBase<any>>(`/users/${user_id}`)
}

export const useProfile = () => {
    const {userInfo} = useAuthStore();
    const userId = userInfo?.id;

    const query = useQuery(
        {
            queryKey: ["profile", userId],
            queryFn: ()=>fetchUserProfile(userId!),
        }
    );
    return {
        profile: query.data ?? null
    }
}