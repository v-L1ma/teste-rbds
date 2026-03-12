import { useAuth } from "@/hooks/useAuth";

export const Dashboard = () => {
    const {userInfo} = useAuth();

    return (
        <div>
            <h1 className="text-3xl mb-2">Dashboard</h1>
            <h2>Bem-vindo {userInfo?.fullname}!</h2>
        </div>
    );
}