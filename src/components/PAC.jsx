import {
  Grid,
  GridItem,
  Box,
  Heading,
  Button,
  Input,
  Stack,
  Image,
  Divider,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  HStack,
  VStack,
  Card,
  CardHeader,
  Flex,
  Avatar,
  StackDivider,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableCaption,
  TableContainer,
  Td,
  FormControl,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import PACList from "./PACList";
import { usePAC } from "../context/AuthContext";
import useForm from "../hooks/useForm";
import { logout } from "../services/auth";

import {
  SearchIcon,
  StarIcon,
  SmallAddIcon,
  CloseIcon,
  CheckIcon,
  DeleteIcon,
  EditIcon,
  AttachmentIcon,
} from "@chakra-ui/icons";

import PACCard from "./CARD";
import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";

const initialState = {
  buscar: "",
};

const Vista = () => {
  const { searchPacs } = usePAC();
  const { formValues, handleInput } = useForm(initialState);
  const { buscar } = formValues;
  const { pacs, getPacs } = usePAC();
  const {deletePacs,  getPacsbyId} = usePAC()
  const { user } = useAuth();

  /*const borrar = () => {
    deletePacs(pac.idactividad, pac.detalle);
  };

  const editar = () => {
        getPacsbyId(pac.idactividad)
  };*/

  useEffect(() => {
    getPacs(user.id);
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    await searchPacs(buscar, user.id);
  };

  return (
    <>
      <Box>
        <Grid templateColumns="repeat(5, 1fr)" gap={3} height="75px">
          <GridItem colSpan={1} ml="20px">
            <Image src="/public/logoRiobamba.png" maxW="75px"></Image>
          </GridItem>

          <GridItem colSpan={3}>
            <form onSubmit={handleSearch}>
              <FormControl id="buscar">
                <InputGroup mt="15px" pl="10px" pr="10px">
                  <InputLeftElement pointerEvents="none" pl="20px">
                    <SearchIcon color="#223059"></SearchIcon>
                  </InputLeftElement>
                  <Input
                    type="text"
                    name="buscar"
                    placeholder="Buscar ..."
                    value={buscar}
                    onChange={handleInput}
                  ></Input>
                  <InputRightElement width="4.5rem" p="5px" mr="6px">
                    <Button
                      colorScheme="whiteAlpha"
                      color="#223059"
                      borderColor="#223059"
                      border="1px"
                      _hover={{ bg: "#223059", color: "lightgray" }}
                      type="submit"
                    >
                      Buscar
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
            </form>
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
                        <Heading fontSize="sm">{/*usuario[0].nombre*/} </Heading>
                        <Text fontSize="sm">{/*usuario[0].departamento*/}</Text>
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
                  bgColor="gray.50"
                  color="gray.600"
                >
                  <Link to="/inicio">Dashboard</Link>
                </Button>
              </Stack>
              <Stack direction="row" spacing={4} mb="10px">
                <Button
                  leftIcon={<SmallAddIcon />}
                  variant="solid"
                  w="230px"
                  bgColor="blue.50"
                  color="blue.600"
                >
                  <Link to="/PAC">Requerimientos</Link>
                </Button>
              </Stack>
              <Stack direction="row" spacing={4} mb="10px">
                <Button
                  leftIcon={<CheckIcon />}
                  variant="solid"
                  w="230px"
                  bgColor="gray.50"
                  color="gray.600"
                  isDisabled
                >
                  <Link>Evaluación</Link>
                </Button>
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
            <VStack width="100%">
              <Stack direction="row" spacing="475px" mb="10px" width="90%">
                <Text fontSize="4xl">Requerimientos de PAC</Text>
                <Button
                  leftIcon={<SmallAddIcon />}
                  variant="solid"
                  w="230px"
                  bgColor="blue.50"
                  color="blue.600"
                >
                  <Link to="/PAC/registro">Nuevo Requerimiento</Link>
                </Button>
              </Stack>
              <Divider width="90%"></Divider>
              <Stack direction="row" spacing="500px" mb="10px" width="90%">
                <TableContainer width="100%">
                  <Table variant="striped" colorScheme="blue">
                    <TableCaption>Requerimientos de PAC</TableCaption>
                    <Thead>
                      <Tr>
                        <Th>Detalle</Th>
                        <Th>Fecha de creación</Th>
                        <Th>Etapa</Th>
                        <Th>Documentar</Th>
                        <Th>Acciones</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {pacs.length === 0 && (
                        <p>No se han encontrado registros</p>
                      )}
                      {pacs.map((pac) => (
                        <Tr key={pac.idactividad}>
                          <Td>{pac.detalle.slice(0, 25) + "..."}</Td>
                          <Td>{pac.fechacreacion}</Td>
                          <Td>Preparatoria</Td>
                          <Td>
                            <Button
                              variant="solid"
                              w="150px"
                              bgColor="gray.50"
                              color="gray.600"
                              mr="10px"
                            >
                              <Link to="/PAC/documentar/:id">
                                <AttachmentIcon /> Documentar
                              </Link>
                            </Button>
                          </Td>
                          <Td>
                            <Button
                              variant="solid"
                              w="50px"
                              bgColor="yellow.50"
                              color="yellow.600"
                              mr="10px"
                            >
                              <Link to="/PAC/editar/:objeto">
                                <EditIcon />
                              </Link>
                            </Button>
                            {/* el boton de eliminar no cache como hacer */}
                            <Button
                              variant="solid"
                              w="50px"
                              bgColor="red.50"
                              color="red.600"
                              onClick={() => deletePacs(pac.idactividad, pac.detalle)}
                            >
                              <DeleteIcon />
                            </Button>
                          </Td>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                </TableContainer>
              </Stack>
            </VStack>
          </Box>
        </HStack>
      </Box>
    </>
  );
};

export default Vista;
