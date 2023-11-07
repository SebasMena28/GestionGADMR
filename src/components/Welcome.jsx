import {
  Box,
  Grid,
  GridItem,
  Image,
  InputGroup,
  InputLeftElement,
  Input,
  Avatar,
  InputRightElement,
  Button,
  StackDivider,
  HStack,
  Card,
  Text,
  CardHeader,
  Flex,
  Heading,
  VStack,
  Stack,
  AspectRatio,
} from "@chakra-ui/react";
import {
  SearchIcon,
  StarIcon,
  SmallAddIcon,
  CheckIcon,
  CloseIcon,
} from "@chakra-ui/icons";

import { logout } from "../services/auth";
import { useAuth, usePAC } from "../context/AuthContext";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  const {user} = useAuth();
  const { usuario, getUsuario } = usePAC();
  var nombre, departamento
  //console.log(user.id)

  const cerrarSesion = async () => {
    await logout();
  };

  useEffect(() => {
    console.log(user.id)
    getUsuario(user.id)
    console.log(usuario)
    if (usuario == []) {
      console.log("vacio")
      nombre = 'BIENVENIDO'; departamento = 'holi'
    }
    else {
      nombre = usuario.nombre; departamento = usuario.departamento
    }
  }, []);

  return (
    <>
      <Box>
        <Grid templateColumns="repeat(5, 1fr)" gap={3} height="75px">
          <GridItem colSpan={1} ml="20px">
            <Image src="/public/logoRiobamba.png" maxW="75px"></Image>
          </GridItem>

          <GridItem colSpan={3}>
            <InputGroup mt="15px" pl="10px" pr="10px">
              <InputLeftElement pointerEvents="none" pl="20px">
                <SearchIcon color="#223059"></SearchIcon>
              </InputLeftElement>
              <Input type="text" placeholder="Buscar ..."></Input>
              <InputRightElement width="4.5rem" p="5px" mr="6px">
                <Button
                  colorScheme="whiteAlpha"
                  color="#223059"
                  borderColor="#223059"
                  border="1px"
                  _hover={{ bg: "#223059", color: "lightgray" }}
                >
                  Buscar
                </Button>
              </InputRightElement>
            </InputGroup>
          </GridItem>

          <GridItem colSpan={1} align="end" mr="20px" mt="12px">
            <Avatar bg="#223059" />
          </GridItem>
        </Grid>

        <HStack divider={<StackDivider borderColor="gray.200" />}>
          <Box w="20%" pl="20px" pr="20px" h="92vh" bg="white">
            <VStack>
              <Card maxW="md" bg="blackAlpha.100" mb="20px">
                <CardHeader>
                  <Flex spacing="4">
                    <Flex flex="1" gap={4} alignItems="center" flexWrap="wrap">
                      <Avatar bg="#223059" />
                      <Box>
                        <Heading fontSize="sm">
                          {/*usuario[0].nombre*/} Nombre
                        </Heading>
                        <Text fontSize="sm">{/*usuario[0].departamento*/} Direccion</Text>
                      </Box>
                    </Flex>
                  </Flex>
                </CardHeader>
              </Card>
              <Stack direction="row" spacing={4} mb="10px">
                <Button
                  leftIcon={<StarIcon />}
                  variant="solid"
                  w="230px"
                  bgColor="blue.50"
                  color="blue.600"
                >
                  Dashboard
                </Button>
              </Stack>
              <Stack direction="row" spacing={4} mb="10px">
                <Button
                  leftIcon={<SmallAddIcon />}
                  variant="solid"
                  w="230px"
                  bgColor="gray.50"
                  color="gray.600"
                >
                  <Link to="/PAC">Requerimientos</Link>
                </Button>
              </Stack>
              <Stack direction="row" spacing={4} mb="10px">
                
              </Stack>
              <Stack direction="row" spacing={4} mb="10px">
                <Button
                  leftIcon={<CloseIcon />}
                  variant="solid"
                  w="230px"
                  bgColor="red.50"
                  color="red.600"
                  onClick={() => logout()}
                >
                  Cerrar sesión
                </Button>
              </Stack>
            </VStack>
          </Box>

          <Box width="80%">
            <AspectRatio ratio={16 / 9} maxH="100vh">
              <iframe src="https://lookerstudio.google.com/embed/reporting/908fe3d0-3f48-4fdd-a465-96ce2acf66c1/page/p_nk6k7qms8c "></iframe>
            </AspectRatio>
          </Box>
        </HStack>
      </Box>
    </>
  );
};

export default Welcome;