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

const Login = () => {
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
      <form onSubmit={handleSubmit}>
        <Stack spacing="4" mt="10px">
          <FormControl id="usuario">
            <FormLabel>Correo electrónico:</FormLabel>
            <Input
              focusBorderColor="#223059"
              type="email"
              name="usuario"
              label="Correo electrónico"
              value={usuario}
              onChange={handleInput}
            />
          </FormControl>

          <FormControl id="password">
            <FormLabel>Contraseña:</FormLabel>
            <InputGroup>
              <Input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="*******"
                value={password}
                onChange={handleInput}
              />
              <InputRightElement>
                <Button
                  h="1.75 rem "
                  size="sm"
                  onClick={handleClick}
                  color="#223059"
                  colorScheme="whiteAlpha"
                >
                  {showPassword ? <ViewOffIcon /> : <ViewIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <Button
            mt="10px"
            type="submit"
            fullWidth
            colorScheme="gray"
            color="#223059"
            rounded={10}
            borderColor="#223059"
            border="1px"
            _hover={{ bg: "#223059", color: "lightgray" }}
          >
            Iniciar Sesión
          </Button>
        </Stack>
      </form>
    </>

  );
};

export default Login;