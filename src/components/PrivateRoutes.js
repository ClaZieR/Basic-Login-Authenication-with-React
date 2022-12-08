import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom'
const PrivateRoutes = () => {
    const login = useSelector((state)=>state.func.login)
    const isLogged = login
return (
    isLogged ? <Outlet/> : <Navigate to="/"/>
  )
}

export default PrivateRoutes;