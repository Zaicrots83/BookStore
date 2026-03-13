import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Login from './pages/login'
import AdminHome from './pages/Admin/Home'
import AdminUsers from './pages/Admin/users'
import FormUpdateUSers from './pages/Admin/formUpdateUser'
import AddUser from './pages/Admin/Add_user'

const App = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Navigate to="/Login" />}/>
                <Route path='/Login' element={<Login />}/>
                <Route path ='/AdminHome' element={<AdminHome/>}/>
                <Route path='/AdminUsers' element={<AdminUsers/>}/>
                <Route path='/UpdateUser/:id' element={<FormUpdateUSers/>}/>
                <Route path='/AddUser' element={<AddUser/>}/>

            </Routes>
        </BrowserRouter>
    )
}

export default App;