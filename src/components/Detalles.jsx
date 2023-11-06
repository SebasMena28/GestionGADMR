import {
  Center,
  Box,
  Heading,
  Button,
  Text,
  useDisclosure,
  Grid,
  GridItem,
  InputGroup,
  Input,
  Stack,
  Image,
  Divider,
  InputLeftElement,
  InputRightElement,
  HStack,
  VStack,
  Card,
  CardHeader,
  Flex,
  Avatar,
  StackDivider,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableCaption,
  TableContainer,
  Td,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ListFiles from "./ListFiles";
import { useParams } from "react-router-dom";
import useFiles from "../hooks/useFiles";
import ModalFile from "./modals/modalFile";
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
import { logout } from "../services/auth";

const Detalles = () => {
  const { id } = useParams();
  const { files, uploadFile, saveFile } = useFiles(id);
  const { isOpen, onOpen, onClose } = useDisclosure();

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
                        <Text fontSize="sm">
                          {/*usuario[0].departamento*/} Direccion
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
                        <Th>Etapa</Th>
                        <Th>Subir documento</Th>
                        <Th>Acciones</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td>Algo</Td>
                        <Td>Preparatoria</Td>
                        <Td>
                          <Button
                            onClick={onOpen}
                            variant="solid"
                            w="150px"
                            bgColor="gray.50"
                            color="gray.600"
                            mr="10px"
                          >
                            {" "}
                            <AttachmentIcon /> Subir documento
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
                          >
                            <DeleteIcon />
                          </Button>
                        </Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
              </Stack>
            </VStack>
          </Box>
        </HStack>
      </Box>

      <Center placeContent="center" w="auto" h="auto" mt="25px" mb="15px">
        <Box boxShadow="2xl" p="6" w="800px" h="auto" rounded="md" bg="white">
          <Heading size="2xl" mb="25px">
            <Center>DOCUMENTACION DE PAC #ID </Center>
          </Heading>
          <Button onClick={onOpen}>Subir documento</Button>
          <ListFiles files={files} />
          {isOpen && (
            <ModalFile
              isOpen={isOpen}
              onClose={onClose}
              uploadFile={uploadFile}
              saveFile={saveFile}
            />
          )}
        </Box>
      </Center>
    </>
  );
};

export default Detalles; 
