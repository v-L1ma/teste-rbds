import { Button } from "@/components/ui/button"
import { useAuth } from "@/hooks/useAuth"
import { LogOut } from "lucide-react"

export const Header = () => {
    const {logout} = useAuth()

    return (
        <header className="shadow-md flex items-center justify-end py-3 px-[10vw]">
            <Button className="w-20 flex justify-around" onClick={()=>logout()}>
                <LogOut></LogOut>
                <p>Sair</p>
            </Button>
        </header>
    )
}