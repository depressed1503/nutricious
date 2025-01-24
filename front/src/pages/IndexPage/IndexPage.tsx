import { useAuth } from "@/context/AuthContext"

export default function IndexPage() {
    const { user } = useAuth()
    return (
        <div>
            {user ? 
                <>
                    <div>Пользователь: {user.first_name} {user.last_name}</div> 
                    <a href="/logout">Выход</a>
                </>
                : 
                <div><a href="/login">Вход</a></div>
            }
        </div>
    )
}
