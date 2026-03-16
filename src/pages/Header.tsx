import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useAuth } from "@/hooks/useAuth"
import { CircleUserRound,LogOut,UserRound } from "lucide-react"
import { useNavigate } from "react-router-dom"

export const Header = () => {
    const {logout, userInfo} = useAuth();
    const navigate = useNavigate();

    return (
        <header className="shadow-md flex items-center justify-between py-3 px-[10vw]">
            <Button variant="ghost" className="h-10 mr-5 p-0" onClick={()=>navigate("/dashboard")}>
                <img className="h-10" src="rbdsLogo.png" alt="Logo" />
            </Button>
            <Popover>
                <PopoverTrigger asChild>
                <Button variant="ghost" className="h-auto p-2">
                    <CircleUserRound className="size-6" />
                    <p className="font-normal">{userInfo?.fullname}</p>
                </Button>
                </PopoverTrigger>
                <PopoverContent align="end" className="w-40 bg-white p-2 gap-1 border border-black/15 outline-none">
                    <Button variant={"ghost"} className="w-full text-sm font-normal flex justify-start gap-4" onClick={()=>navigate("/profile")}>
                        <UserRound className="size-5" />
                        <p>Ver Perfil</p>
                    </Button>

                    <Button variant={"ghost"} className="w-full text-red-600 font-normal flex justify-start gap-4" onClick={()=>logout()}>
                        <LogOut className="size-5"></LogOut>
                        <p>Sair</p>
                    </Button>
                </PopoverContent>
            </Popover>
        </header>
    )
}