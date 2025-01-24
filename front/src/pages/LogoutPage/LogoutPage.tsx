import { useAuth } from "@/context/AuthContext"
import { useEffect } from "react"

export default function LogoutPage() {
    const { logout } = useAuth()
    useEffect(() => logout())
    return (
        <></>
    )
}
