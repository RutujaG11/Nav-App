import LandingPage from './Components/LandingPage'
import Login from './Components/Login'
import NavBar from './Components/NavBar'
//import NavBar from './Components/NavBar'
import Portfolio from './Components/Portfolio'
import Registration from './Components/Registration'
import UserDetails from './Components/UserDetails'

export const appRoutes=[
    
    
    {
        path:'/Login',
        element:<Login/>
    },
    
    {
        path:'/Portfolio',
        element:<Portfolio/>
    },
    {
        path:'/UserDetails',
        element:<UserDetails/>
    },
    {
        path:'/Registration',
        element:<Registration/>
    }
]
