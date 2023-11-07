import {
  FormControl,
  FormLabel,
  Input,
  Center,
  Box,
  Heading,
  Select,
  Button,
  Text,
  Divider,
  Textarea,
  Stack,
  Image,
  Grid,
  GridItem,
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
} from "@chakra-ui/react";

import useForm from "../hooks/useForm";
import { useState } from "react";
import { usePAC, useAuth } from "../context/AuthContext";
import { logout } from "../services/auth";


import {
  SearchIcon,
  StarIcon,
  SmallAddIcon,
  CloseIcon,
  CheckIcon,
} from "@chakra-ui/icons";

import { Link } from "react-router-dom";

const initialState = {
  idproyecto: "",
  idtecnico: "",
  iddireccion: "",
  idtipocompra: "",
  idunidad: "",
  idperiodos: "",
  idproceso: "",
  idfondobid: "",
  idtipopresupuesto: "",
  idregimen: "",
  idtipoproducto: "",
  anio: "",
  partidapresupuestaria: "",
  cpc: "",
  detalle: "",
  cantidad: "",
  costounitario: "",
  subtotal: "",
  catalogoelectronico: "",
  fechacreacion: "",
};

const Formulario = () => {
  const { formValues, handleInput } = useForm(initialState);
  const { addPacs } = usePAC();
  const { user } = useAuth();
  console.log(user.id);

  const {
    idproyecto,
    idtecnico = 1,
    iddireccion = 1,
    idtipocompra,
    idunidad,
    idperiodos,
    idproceso = 1,
    idfondobid,
    idtipopresupuesto,
    idregimen,
    idtipoproducto,
    anio,
    partidapresupuestaria,
    cpc,
    detalle,
    cantidad,
    costounitario,
    subtotal = cantidad * costounitario,
    catalogoelectronico,
    fechacreacion,
  } = formValues; //esto se puede hacer cuando hayan mas campos tambien

  const handleSubmit = async (e) => {
    e.preventDefault();
    addPacs(formValues, user.id);
  };

  const inputStyle = {
    display: "none",
  };

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
                          {/*usuario[0].nombre*/} 
                        </Heading>
                        <Text fontSize="sm">
                          {/*usuario[0].departamento*/} 
                        </Text>
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
                >
                  <Link to="/PAC/documentar">Evaluación</Link>
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
                <Text fontSize="4xl">Nuevo Requerimiento de PAC</Text>
              </Stack>
              <Divider width="90%"></Divider>
              <Stack direction="row" spacing="500px" mb="10px" width="90%">
                <form onSubmit={handleSubmit}>
                  <Grid
                    mt="10px"
                    h="400px"
                    templateRows="repeat(1, 1fr)"
                    templateColumns="repeat(5, 1fr)"
                    gap={4}
                  >
                    <GridItem colSpan={1} p="10px">
                      <Stack spacing="40px"></Stack>
                      <FormControl id="anio" isRequired="true">
                        <FormLabel>Año: </FormLabel>
                        <Input
                          type="number"
                          name="anio"
                          placeholder="2023"
                          value={anio}
                          onChange={handleInput}
                          variant="flushed"
                        />
                      </FormControl>
                      <FormControl id="partidapresupuestaria" isRequired="true">
                        <FormLabel>Partida presupuestaria: </FormLabel>
                        <Input
                          type="number"
                          name="partidapresupuestaria"
                          placeholder="1234567890"
                          value={partidapresupuestaria}
                          onChange={handleInput}
                          variant="flushed"
                        />
                      </FormControl>

                      <FormControl id="cpc" isRequired="true">
                        <FormLabel> Categoría CPC: </FormLabel>
                        <Input
                          type="number"
                          name="cpc"
                          placeholder="1234567890"
                          value={cpc}
                          onChange={handleInput}
                          variant="flushed"
                        />
                      </FormControl>
                      <FormControl id="idtipocompra" isRequired="true">
                        <FormLabel>Tipo de compra</FormLabel>
                        <Select
                          name="idtipocompra"
                          value={idtipocompra}
                          onChange={handleInput}
                          variant="flushed"
                          placeholder="Tipo de compra"
                        >
                          <option selected value="1">
                            BIEN
                          </option>
                          <option value="2">SERVICIO</option>
                          <option value="3">CONSULTORIA</option>
                          <option value="4">OBRA</option>
                        </Select>
                      </FormControl>
                      <FormControl id="cantidad" isRequired="true">
                        <FormLabel>Cantidad: </FormLabel>
                        <Input
                          type="number"
                          name="cantidad"
                          placeholder="1"
                          value={cantidad}
                          onChange={handleInput}
                          variant="flushed"
                        />
                      </FormControl>

                      <FormControl id="idunidad" isRequired="true">
                        <FormLabel>Unidad: </FormLabel>
                        <Select
                          name="idunidad"
                          value={idunidad}
                          onChange={handleInput}
                          variant="flushed"
                          placeholder="Tipo de unidad"
                        >
                          <option selected value="1">
                            UNIDAD
                          </option>
                          <option value="2">BOLSA</option>
                          <option value="3">DOCENA</option>
                          <option value="4">KILO</option>
                          <option value="5">METRO</option>
                          <option value="6">ARROBA</option>
                          <option value="7">GALON</option>
                          <option value="8">LITRO</option>
                          <option value="9">GRAMO</option>
                          <option value="10">PAQUETE</option>
                        </Select>
                      </FormControl>
                    </GridItem>
                    <GridItem colSpan={4} p="10px">
                    <FormControl id="idproyecto" isRequired="true">
                        <FormLabel>Proyecto: </FormLabel>
                        <Select
                          name="idproyecto"
                          value={idproyecto}
                          onChange={handleInput}
                          variant="flushed"
                          placeholder="Proyecto al que se vincula la actividad"
                        >
                          <option selected value="1">
                          MANTENIMIENTO Y REPARACION DE VIAS URBANAS
                          </option>
                          <option value="2">CONSTRUCCION Y MEJORAMIENTO DE ESPACIOS RECREATIVOS, DEPORTIVOS Y CULTURALES</option>
                          <option value="3">CONSTRUCCION Y MEJORAMIENTO DE INFRAESTRUCTURA FISICA CANTONAL </option>
                          <option value="4">DOTACIÓN DE INFRAESTRUCTURA HIDROSANITARIA PARA EL CANTÓN RIOBAMBA </option>
                          <option value="5">FORTALECIMIENTO Y DESARROLLO DE PARROQUIAS RURALES </option>
                        </Select>
                      </FormControl>
                      <FormControl id="detalle" isRequired="true">
                        <FormLabel>Detalle de la actividad: </FormLabel>
                        <Textarea
                          name="detalle"
                          placeholder="Ingrese el detalle de la actividad"
                          value={detalle}
                          onChange={handleInput}
                          variant="flushed"
                        />
                      </FormControl>

                      <Grid
                        mt="10px"
                        templateRows="repeat(1, 1fr)"
                        templateColumns="repeat(3, 1fr)"
                        gap={4}
                        mb="10px"
                      >
                        <GridItem colSpan={1}>
                          <FormControl id="costounitario" isRequired="true">
                            <FormLabel>Costo unitario: </FormLabel>
                            <Input
                              type="number"
                              name="costounitario"
                              placeholder="10.00"
                              value={costounitario}
                              onChange={handleInput}
                              variant="flushed"
                            />
                          </FormControl>
                        </GridItem>

                        <GridItem colSpan={1}>
                          <FormControl id="idperiodos" isRequired="true">
                            <FormLabel>Periodos: </FormLabel>
                            <Select
                              name="idperiodos"
                              value={idperiodos}
                              onChange={handleInput}
                              variant="flushed"
                              placeholder="Cuatrimestre"
                            >
                              <option selected value="1">
                                CUATRIMESTRE 1
                              </option>
                              <option value="2">CUATRIMESTRE 2</option>
                              <option value="3">CUATRIMESTRE 3</option>
                            </Select>
                          </FormControl>
                        </GridItem>
                        <GridItem colSpan={1}>
                          <FormControl id="idtipoproducto" isRequired="true">
                            <FormLabel>Tipo de producto: </FormLabel>
                            <Select
                              name="idtipoproducto"
                              value={idtipoproducto}
                              onChange={handleInput}
                              variant="flushed"
                              placeholder="Tipo de producto"
                            >
                              <option value="1">NORMALIZADO</option>
                              <option value="2">NO NORMALIZADO </option>
                              <option value="3">NO APLICA </option>
                            </Select>
                          </FormControl>
                        </GridItem>
                      </Grid>

                      <Grid
                        mt="10px"
                        templateRows="repeat(1, 1fr)"
                        templateColumns="repeat(3, 1fr)"
                        gap={4}
                        mb="10px"
                      >
                        <GridItem colSpan={1}>
                          <FormControl
                            id="catalogoelectronico"
                            isRequired="true"
                          >
                            <FormLabel>Catálogo electrónico: </FormLabel>
                            <Select
                              name="catalogoelectronico"
                              value={catalogoelectronico}
                              onChange={handleInput}
                              variant="flushed"
                              placeholder="Catálogo electrónico"
                            >
                              <option selected value="NO">
                                NO
                              </option>
                              <option value="SI">SI</option>
                            </Select>
                          </FormControl>
                        </GridItem>
                        <GridItem colSpan={1}>
                          <FormControl id="idfondobid" isRequired="true">
                            <FormLabel>Fondos BID: </FormLabel>
                            <Select
                              name="idfondobid"
                              value={idfondobid}
                              onChange={handleInput}
                              variant="flushed"
                              placeholder="Fondos BID"
                            >
                              <option selected value="1">
                                NO
                              </option>
                              <option value="2">SI </option>
                            </Select>
                          </FormControl>
                        </GridItem>
                        <GridItem colSpan={1}>
                          <FormControl id="idregimen" isRequired="true">
                            <FormLabel>Tipo de régimen: </FormLabel>
                            <Select
                              name="idregimen"
                              value={idregimen}
                              onChange={handleInput}
                              variant="flushed"
                              placeholder="Tipo de régimen"
                            >
                              <option selected value="1">
                                COMÚN
                              </option>
                              <option value="2">ESPECIAL</option>
                            </Select>
                          </FormControl>
                        </GridItem>
                      </Grid>

                      <Grid
                        mt="10px"
                        templateRows="repeat(1, 1fr)"
                        templateColumns="repeat(2, 1fr)"
                        gap={4}
                        mb="10px"
                      >
                        <GridItem colSpan={1}>
                          <FormControl id="idtipopresupuesto" isRequired="true">
                            <FormLabel>Tipo de presupuesto: </FormLabel>
                            <Select
                              name="idtipopresupuesto"
                              value={idtipopresupuesto}
                              onChange={handleInput}
                              variant="flushed"
                              placeholder="Tipo de presupuesto"
                            >
                              <option selected value="1">
                                PROYECTO DE INVERSIÓN
                              </option>
                              <option value="2">GASTO CORRIENTE</option>
                            </Select>
                          </FormControl>
                        </GridItem>
                        <GridItem mt="25px">
                          <Center>
                            <Button
                              leftIcon={<CheckIcon />}
                              variant="solid"
                              w="230px"
                              bgColor="blue.50"
                              color="blue.600"
                              type="submit"
                            >
                              Guardar Requerimiento
                            </Button>
                          </Center>
                        </GridItem>
                      </Grid>
                    </GridItem>
                  </Grid>
                  <Stack spacing={5}>
                    <FormControl id="idtecnico" style={inputStyle}>
                      <FormLabel>Tecnico: </FormLabel>
                      <Input
                        type="number"
                        name="idtecnico"
                        placeholder="Dijite el año"
                        value={1}
                        onChange={handleInput}
                      />
                    </FormControl>
                  </Stack>
                </form>
              </Stack>
            </VStack>
          </Box>
        </HStack>
      </Box>
    </>
  );
};

export default Formulario;