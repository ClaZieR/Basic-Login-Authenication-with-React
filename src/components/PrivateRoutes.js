import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom'
const PrivateRoutes = () => {
    const isLogged = true //useSelector((state)=>state.initialstate.isLogged
return (
    isLogged ? <Outlet/> : <Navigate to="/"/>
  )
}

export default PrivateRoutes;