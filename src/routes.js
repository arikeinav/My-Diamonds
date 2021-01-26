import { MainApp } from './pages/MainApp.jsx'
import { DiamondsApp } from './pages/DiamondsApp.jsx'
import { Users } from './pages/Users.jsx'


export default [
   
    {
        path: '/diamonds',
        component: DiamondsApp
    },
    {
        path: '/users',
        component: Users
    },
    {
        path: '/',
        component: MainApp
    }
]