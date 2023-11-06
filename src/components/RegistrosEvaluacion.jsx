import {
  Grid,
  GridItem,
  Box,
  Center,
  Heading,
  Button,
  Stack,
  Image,
  Divider,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

const Form = () => {
  return (
    <Center placeContent="center" w="auto" h="100%">
      <Box boxShadow="2xl" p="6" rounded="md" bg="white">
        <Stack>
          <Image
            src="/public/logoRiobamba.png"
            maxW="90px"
            mb="1"
            mx="auto"
          ></Image>
          <Heading as="h1" mb="10px">
            <Center>Evaluación de Actividades de PAC</Center>
          </Heading>
        </Stack>
        <Divider></Divider>
        <Grid
          mt="10px"
          templateRows="repeat(1, 1fr)"
          templateColumns="repeat(4, 1fr)"
          gap={4}
        >
          <GridItem colSpan={3}>
            <FormControl mb="10px">
              <FormLabel>Buscar Actividad </FormLabel>
              <Input type="email" />
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
            >
              Buscar Actividad
            </Button>
          </GridItem>
        </Grid>

        <Grid templateColumns="repeat(5, 1fr)" gap={4}>
          <Center></Center>
        </Grid>
        <TableContainer>
          <Table variant="striped" colorScheme="blue">
            <TableCaption>Registros de Evaluacion</TableCaption>
            <Thead>
              <Tr>
                <Th>Evaluar</Th>
                <Th>Detalle de la actividad</Th>
                <Th>Partida Presupuestaria</Th>
                <Th>Subtotal</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>
                  <Button
                    size="lg"
                    color="#223059"
                    rounded={30}
                    borderColor="#223059"
                    border="1px"
                    _hover={{ bg: "#223059", color: "lightgray" }}
                    mt="25px"
                  >
                    {" "}
                    <Link to="evaluarRegistro">Evaluar</Link>
                  </Button>{" "}
                </Td>
                <Td>DECLARATORIO DE UTILIDAD PÚBLICA...</Td>
                <Td>840,301.00</Td>
                <Td>$2250</Td>
              </Tr>
              <Tr>
                <Td>
                  <Button
                    size="lg"
                    color="#223059"
                    rounded={30}
                    borderColor="#223059"
                    border="1px"
                    _hover={{ bg: "#223059", color: "lightgray" }}
                    mt="25px"
                  >
                    {" "}
                    <Link to="evaluarRegistro">Evaluar</Link>
                  </Button>{" "}
                </Td>
                <Td>CONSULTORÍA PARA REALIZAR LOS ES...</Td>
                <Td>840,301.00</Td>
                <Td>$50,000.00</Td>
              </Tr>
              <Tr>
                <Td>
                  <Button
                    size="lg"
                    color="#223059"
                    rounded={30}
                    borderColor="#223059"
                    border="1px"
                    _hover={{ bg: "#223059", color: "lightgray" }}
                    mt="25px"
                  >
                    {" "}
                    <Link to="evaluarRegistro">Evaluar</Link>
                  </Button>{" "}
                </Td>
                <Td>DECLARATORIA DE UTILIDAD PÚBLICA...</Td>
                <Td>730,601.00</Td>
                <Td>$3,300.00</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Center>
  );
};

export default Form;
