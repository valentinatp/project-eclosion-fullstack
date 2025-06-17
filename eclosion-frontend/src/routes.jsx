

import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Layout from './pages/Layout'
import Register from './Components/Forms/Register/Register'
import Feed from './Components/Feed/Feed'
import About from './Components/About Us/About'
import NotFound from './Components/HTTP States/Error 404/NotFound'
import MyProfile from './Components/MyPerson/Myperfile'
import NoticeCard from './Components/Feed/Card-feed'



export const router = createBrowserRouter(
    createRoutesFromElements(
        // un componente "Route" por cada ruta
        <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/register" element={<Register />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="*" element={<NotFound />} />
            <Route path='/NoticeCard' element={<NoticeCard/>} />
            <Route path="/about" element={<About />} />
            <Route path="/myprofile" element={<MyProfile />} />
            <Route path="/ejemplo" element={<h1>Hola ejemplo</h1>} />
        </Route>
    )
)