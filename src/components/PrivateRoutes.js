import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom'
const PrivateRoutes = () => {
    const isLogged = useSelector((state)=>state.user.isLogged)
return (
    isLogged ? <Outlet/> : <Navigate to="/"/>
  )
}

export default PrivateRoutes;