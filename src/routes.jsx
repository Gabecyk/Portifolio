import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contatos from "./pages/Contatos";
import Projetos from "./pages/Projetos";
import Sobre from "./pages/Sobre";
import Page404 from "./pages/Page404";
import PaginaBase from "./pages/PaginaBase";

function AppRoutes(){
    return (
        <BrowserRouter>
                <Routes>
                    <Route path='/' element={ <PaginaBase/> }>
                        <Route index element={<Home/>}></Route>
                        <Route path="/Portifolio" element={<Home/>}></Route>
                        <Route path="/sobre" element={<Sobre/>}></Route>
                        <Route path="/projetos" element={<Projetos/>}></Route>
                        <Route path="/contatos" element={<Contatos/>}></Route>
                        <Route path="*" element={<Page404/>}></Route>
                    </Route>
                </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes