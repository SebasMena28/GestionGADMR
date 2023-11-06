import {
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    InputGroup,
    InputRightElement,
  } from "@chakra-ui/react";
  import useForm from "../hooks/useForm";
  import { login } from "../services/auth";
  import { useState } from "react";
  import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
  
  const initialState = {
    usuario: "",
    password: "",
  };
  
  const inicioEvaluacion = () => {
    const { formValues, handleInput } = useForm(initialState);
    const [showPassword, setShowPassword] = useState(false);
    const { usuario, password } = formValues;
    const handleClick = () => setShowPassword(!showPassword);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      await login(formValues);
    };
  
    return (
      <>
        <h1>PANTALLA DE EVALUACION</h1>
      </>
    );
  };
  
  export default inicioEvaluacion;