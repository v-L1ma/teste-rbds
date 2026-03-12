
import { useAuth } from "@/hooks/useAuth"
import { Header } from "@/pages/Header";
import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"

export const ProtectedRoute: React.FC = () => {
    const {isAuthenticated} = useAuth();
    const navigate = useNavigate();

    useEffect(()=>{
        if(!isAuthenticated){
            navigate('/login')
        }
    })

    return (
        <>
            <Header />
            <div className="px-[10vw] py-6">
                <Outlet />
            </div>
        </>
    )
    
    
    
}