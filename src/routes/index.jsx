import { Routes, Route } from "react-router-dom"
import Welcome from "../components/Welcome"
import AuthForm from "../components/AuthForm"
import EvalForm from "../components/RegistrosEvaluacion"
import Vista from "../components/PAC"
import EvaluarRegistro from "../components/EvaluarRegistro"
import NotFound from "../components/NotFound"
import Formulario from "../components/RegistroPAC"
import Documentar from "../components/DocsPAC"
import EditarForm from "../components/Editar"
import Detalles from "../components/Detalles"
import Evaluador from "../components/Evaluador"

const AppRouter = () => {
    return(
        <Routes> 
            <Route path="*" element={<NotFound/>}></Route> //si pone una ruta que no existe
            <Route path="/" element={<AuthForm/>}></Route> //login
            <Route path="/inicio" element={<Welcome/>}></Route> // pagina inicila luego de iniciar sesion - tecnico
            <Route path="/inicio-eva" element={<Evaluador/>}></Route> // pagina inicial luego de iniciar sesion - evaluador
            <Route path="/PAC" element={<Vista/>}></Route> //vista de PAC
            <Route path="/PAC/editar/:objeto" element={<EditarForm/>}></Route> //formulario para editar pac
            <Route path="/PAC/registro" element={<Formulario/>}></Route> //para registrar PAC
            <Route path="/PAC/documentar" element={<Documentar/>}></Route> //VISTA DE LA DOCUMENTACION DE PAC
            <Route path="/PAC/documentar/:id" element={<Detalles/>}></Route> 
            <Route path="/evaluacion" element={<EvalForm/>}></Route> 
            <Route path="/evaluacion/evaluarRegistro" element={<EvaluarRegistro/>}></Route> //formulario para evaluar el registro
        </Routes>
    )
}

export default AppRouter