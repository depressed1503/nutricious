import { createContext, ReactNode, useContext } from "react"
import { useNavigate } from "react-router"
import Axios from "@/lib/axiosConfig"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { getCurrentUser } from "@/lib/queryFunctions"
import { CustomUser } from "@/lib/types"

const AuthContext = createContext<{
    user: CustomUser | undefined,
    login: (p1: string, p2: string) => void,
    logout: () => void
}>({user: undefined, login: () => {}, logout: () => {}})

export default function AuthProvider(props: {children: ReactNode}) {
    const {data: user} = useQuery({
        queryKey: ["user"],
        queryFn: getCurrentUser,
        retry: false,
    })
    const queryClient = useQueryClient()
    const navigate = useNavigate()

    async function login(login: string, password: string) {
        Axios.post("api/login/", {
            login,
            password
        }).then((resp) => {
            console.log(resp)
            queryClient.invalidateQueries({queryKey: ["user"]})
            navigate("/")
        }).catch((error) => {
            console.warn(error)
        })
    }

    async function logout() {
        Axios.post("api/logout/").then(() => navigate("/"))
    }
    return (
        <AuthContext.Provider value={
            {
                user: user?.data,
                login,
                logout
            }
        }>
            {props.children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}
