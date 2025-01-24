import { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import { useAuth } from "@/context/AuthContext"

export default function LoginPage() {
    const [login, setLogin] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const { login: loginFunction } = useAuth()
    const loginMutation = useMutation({
        mutationFn: async () => loginFunction(login, password)
    })

    return (
        <>
            <div className="flex flex-col gap-1 mx-auto max-w-60">
                <input value={login} onChange={(e) => setLogin(e.target.value)} type="text" />
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
                <button onClick={() => loginMutation.mutate()}>Войти</button>
            </div>
        </>
    )
}
