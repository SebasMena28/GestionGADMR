import {
  Grid,
  GridItem,
  Center,
  Box,
  Heading,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Image,
  Divider,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import PACList from "./PACList";
import { usePAC, useAuth } from "../context/AuthContext";
import useForm from "../hooks/useForm";

const initialState = {
  buscar: "",
};

const Vista = () => {
  const {user} = useAuth();
  const { searchPacs } = usePAC();
  const { formValues, handleInput } = useForm(initialState);
  const { buscar } = formValues;

  const handleSearch = async (e) => {
    e.preventDefault();
    await searchPacs(buscar, user.id);
  };

  return (
    <>
    <form onSubmit={handleSearch}>
      <Center placeContent="center" w="auto">
        <Box p="5" rounded="md" bg="white" w="85%" height="auto">
          <Stack>
            <Image
              src="/public/logoRiobamba.png"
              maxW="90px"
              mb="1"
              mx="auto"
            ></Image>
            <Heading as="h1" mb="10px">
              <Center>Actividades de PAC</Center>
            </Heading>
          </Stack>
          <Divider></Divider>
          <Grid
            mt="10px"
            templateRows="repeat(1, 1fr)"
            templateColumns="repeat(4, 1fr)"
            gap={4}
          >
            <GridItem colSpan={1}>
              <Button
                ml="15px"
                size="lg"
                color="#223059"
                rounded={30}
                borderColor="#223059"
                border="1px"
                _hover={{ bg: "#223059", color: "lightgray" }}
                mt="25px"
              >
                <Link to="/PAC/registro"> Registrar actividad</Link>
              </Button>
            </GridItem>
              <GridItem colSpan={1}>
                <FormControl mb="10px" id="buscar">
                  <FormLabel>Buscar Actividad: </FormLabel>
                  <Input
                    type="text"
                    name="buscar"
                    value={buscar}
                    onChange={handleInput}
                  />
                </FormControl>
              </GridItem>
              <GridItem colSpan={1}>
                <Button
                  size="lg"
                  color="#223059"
                  rounded={30}
                  borderColor="#223059"
                  border="1px"
                  _hover={{ bg: "#223059", color: "lightgray" }}
                  mt="25px"
                  type="submit"
                >
                  Buscar Actividad
                </Button>
              </GridItem>
            
          </Grid>
          <Divider></Divider>
          <Box position="relative">
            <PACList></PACList>
          </Box>
        </Box>
      </Center>
      </form>
    </>
  );
};

export default Vista;
