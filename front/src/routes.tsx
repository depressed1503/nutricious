import { Routes, Route, Navigate, Outlet, useLocation } from "react-router"
import { useAuth } from "@/context/AuthContext"
import IndexPage from "@/pages/IndexPage"
import LoginPage from "@/pages/LoginPage"
import LogoutPage from "./pages/LogoutPage/LogoutPage"

type PrivateRouteProps = {
	isForAuthenticated: boolean,
}

function PrivateRoute({isForAuthenticated}: PrivateRouteProps) {
	const { pathname, search } = useLocation()
	const redirectRoute = new URLSearchParams(search).get('redirect') ?? '/'
	const { user } = useAuth()
	return (
		!((user == undefined) !== !isForAuthenticated) ? <Outlet></Outlet> : <Navigate  to={!isForAuthenticated ? `${redirectRoute}` : `/login/?redirect=${pathname}`}/>
	)
}

export default function AppRoutes() {
    return (
        <Routes>
            <Route element={<PrivateRoute isForAuthenticated={true} />}>
                <Route path="/logout" element={<LogoutPage/>}></Route>
            </Route>
            <Route element={<PrivateRoute isForAuthenticated={false} />}>
                <Route path="/login" element={<LoginPage/>}></Route>
            </Route>
            <Route>
                <Route path="/" element={<IndexPage/>}></Route>
            </Route>
        </Routes>
    )
}

