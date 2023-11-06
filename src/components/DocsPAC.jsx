import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Center,
  Box,
  Heading,
  Select,
  Button,
  Text,
  Divider,
  AbsoluteCenter,
  Textarea,
  Grid,
  GridItem,
  useDisclosure
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useForm from "../hooks/useForm";
import { supabase } from "../API/config";
import ListDocs from "./ListDocs";
import {useState, useEffect} from "react"
import { listDocs } from "../services/storage";
import ModalDoc from "./modals/modalDoc";

const initialState = {
  APU: "",
  VAE: "",
  EspTec: "",
  TWG: "",
  MemTec: "",
  CerAmb: "",
  Crono: "",
  Poli: "",
  Cuad: "",
  Desa: "",
  Semplades: "",
  Dona: "",
  Reque: "",
  EstMer: "",
  DocCom: "",
  Senagua: "",
};

const Documentar = () => {
  const { formValues, handleInput } = useForm(initialState);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const {
    APU,
    VAE,
    EspTec,
    TWG,
    MemTec,
    CerAmb,
    Crono,
    Poli,
    Cuad,
    Desa,
    Semplades,
    Dona,
    Reque,
    EstMer,
    DocCom,
    Senagua,
  } = formValues;
  let [docs, setDocs] = useState([])

  useEffect(() =>{
    listDocs()
    .then(response => {
      //console.log(response)
      setDocs(response)
      docs = response
      //console.log(docs)
    })
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(APU,
        VAE,
        EspTec);
    try {
      const result = await supabase.from("preparatoria").insert({
        estado: 'EN EJECUCION',
        apu_apv_doc: APU,
        presupuestovae_doc: VAE,
        esptecnicas_doc: EspTec,
        twg_doc: TWG,
        memoriastecnicas_doc: MemTec,
        ambiental_doc: CerAmb,
        cronograma_doc: Crono,
        polinomica_doc: Poli,
        cuadrilla_doc: Cuad,
        desagregacion_doc: Desa,
        semplades_doc: Semplades,
        servidumbres_doc: Dona,
        requerimiento_doc: Reque,
        estudiomercado_doc: EstMer,
        doccomplementaria_doc: DocCom,
        senagua_doc: Senagua,
      });
      console.log(result);
    } catch (error){
        console.log(error);
    }
  };

  return (
    <Center placeContent="center" w="auto" h="auto" mt="25px" mb="15px">
      <Box boxShadow="2xl" p="6" w="800px" h="auto" rounded="md" bg="white">
        <Heading size="2xl" mb="25px">
          <Center> Actividades registradas </Center>
        </Heading>

        {/*<Button onClick={onOpen}>Nueva Carpeta</Button>*/}

        <ListDocs docs={docs}></ListDocs>

        {isOpen && <ModalDoc isOpen={isOpen} onClose={onClose} setDocs={setDocs}/>}

        {/*
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>Técnico responsable:</FormLabel>
            <Input value="Ing. Anthony Mendoza" type="email" readOnly />
            <FormHelperText>Persona encargada de la actividad .</FormHelperText>

            <FormLabel mt="20px">Detalle</FormLabel>
            <Textarea
              value="DECLARATORIO DE UTILIDAD PÚBLICA Y OCUPACIÓN INMEDIATA CON FINES DE EXPROPIACIÓN EN PARTE DEL INMUEBLE DE PROPIEDAD DE LAURA RÚALES."
              readOnly
            />

            <Box position="relative" padding="10">
              <Divider />
              <AbsoluteCenter bg="white" px="4">
                Etapa Preparatoria
              </AbsoluteCenter>
            </Box>

            <Center>
              <Grid templateColumns="repeat(2, 1fr)" gap={1} m="15px">
                <GridItem w="100%" h="10">
                  <FormLabel>APU-APV con VAE: </FormLabel>
                </GridItem>
                <GridItem w="100%" h="auto">
                  {" "}
                  <FormControl id="APU">
                    <Input
                      type="file"
                      name="APU"
                      h="60px"
                      value={APU}
                      onChange={handleInput}
                    />
                  </FormControl>{" "}
                </GridItem>
              </Grid>
            </Center>

            <Center>
              <Grid templateColumns="repeat(2, 1fr)" gap={1}>
                <GridItem w="100%" h="10">
                  <FormLabel>Presupuesto con VAE: </FormLabel>
                </GridItem>
                <GridItem w="100%" h="auto">
                  {" "}
                  <FormControl id="VAE">
                    <Input
                      type="file"
                      name="VAE"
                      h="60px"
                      value={VAE}
                      onChange={handleInput}
                    />
                  </FormControl>{" "}
                </GridItem>
              </Grid>
            </Center>

            <Center>
              <Grid templateColumns="repeat(2, 1fr)" gap={1}>
                <GridItem w="100%" h="10">
                  <FormLabel>Especificaciones Técnicas: </FormLabel>
                </GridItem>
                <GridItem w="100%" h="auto">
                  {" "}
                  <FormControl id="EspTec">
                    <Input
                      type="file"
                      name="EspTec"
                      h="60px"
                      value={EspTec}
                      onChange={handleInput}
                    />
                  </FormControl>{" "}
                </GridItem>
              </Grid>
            </Center>

            <Center>
              <Grid templateColumns="repeat(2, 1fr)" gap={1}>
                <GridItem w="100%" h="10">
                  <FormLabel>Planos legalizados y en TWG: </FormLabel>
                </GridItem>
                <GridItem w="100%" h="auto">
                  {" "}
                  <FormControl id="TWG">
                    <Input
                      type="file"
                      name="TWG"
                      h="60px"
                      value={TWG}
                      onChange={handleInput}
                    />
                  </FormControl>{" "}
                </GridItem>
              </Grid>
            </Center>

            <Center>
              <Grid templateColumns="repeat(2, 1fr)" gap={1}>
                <GridItem w="100%" h="10">
                  <FormLabel>Memorias técnicas: </FormLabel>
                </GridItem>
                <GridItem w="100%" h="auto">
                  {" "}
                  <FormControl id="MemTec">
                    <Input
                      type="file"
                      name="MemTec"
                      h="60px"
                      value={MemTec}
                      onChange={handleInput}
                    />
                  </FormControl>{" "}
                </GridItem>
              </Grid>
            </Center>

            <Center>
              <Grid templateColumns="repeat(2, 1fr)" gap={1}>
                <GridItem w="100%" h="10">
                  <FormLabel>Certificacion Ambiental: </FormLabel>
                </GridItem>
                <GridItem w="100%" h="auto">
                  {" "}
                  <FormControl id="CerAmb">
                    <Input
                      type="file"
                      name="CerAmb"
                      h="60px"
                      value={CerAmb}
                      onChange={handleInput}
                    />
                  </FormControl>{" "}
                </GridItem>
              </Grid>
            </Center>

            <Center>
              <Grid templateColumns="repeat(2, 1fr)" gap={1}>
                <GridItem w="100%" h="10">
                  <FormLabel>Cronograma: </FormLabel>
                </GridItem>
                <GridItem w="100%" h="auto">
                  {" "}
                  <FormControl id="Crono">
                    <Input
                      type="file"
                      name="Crono"
                      h="60px"
                      value={Crono}
                      onChange={handleInput}
                    />
                  </FormControl>{" "}
                </GridItem>
              </Grid>
            </Center>

            <Center>
              <Grid templateColumns="repeat(2, 1fr)" gap={1}>
                <GridItem w="100%" h="10">
                  <FormLabel>Fórmula polinómica: </FormLabel>
                </GridItem>
                <GridItem w="100%" h="auto">
                  {" "}
                  <FormControl id="Poli">
                    <Input
                      type="file"
                      name="Poli"
                      h="60px"
                      value={Poli}
                      onChange={handleInput}
                    />
                  </FormControl>{" "}
                </GridItem>
              </Grid>
            </Center>

            <Center>
              <Grid templateColumns="repeat(2, 1fr)" gap={1}>
                <GridItem w="100%" h="10">
                  <FormLabel>Cuadrilla tipo: </FormLabel>
                </GridItem>
                <GridItem w="100%" h="auto">
                  {" "}
                  <FormControl id="Cuad">
                    <Input
                      type="file"
                      name="Cuad"
                      h="60px"
                      value={Cuad}
                      onChange={handleInput}
                    />
                  </FormControl>{" "}
                </GridItem>
              </Grid>
            </Center>

            <Center>
              <Grid templateColumns="repeat(2, 1fr)" gap={1}>
                <GridItem w="100%" h="10">
                  <FormLabel>Cuadrilla tipo: </FormLabel>
                </GridItem>
                <GridItem w="100%" h="auto">
                  {" "}
                  <FormControl id="Cuad">
                    <Input
                      type="file"
                      name="Cuad"
                      h="60px"
                      value={Cuad}
                      onChange={handleInput}
                    />
                  </FormControl>{" "}
                </GridItem>
              </Grid>
            </Center>

            <Center>
              <Grid templateColumns="repeat(2, 1fr)" gap={1}>
                <GridItem w="100%" h="10">
                  <FormLabel>Estudio de desagregación: </FormLabel>
                </GridItem>
                <GridItem w="100%" h="auto">
                  {" "}
                  <FormControl id="Desa">
                    <Input
                      type="file"
                      name="Desa"
                      h="60px"
                      value={Desa}
                      onChange={handleInput}
                    />
                  </FormControl>{" "}
                </GridItem>
              </Grid>
            </Center>

            <Center>
              <Grid templateColumns="repeat(2, 1fr)" gap={1}>
                <GridItem w="100%" h="10">
                  <FormLabel>Proyecto SEMPLADES: </FormLabel>
                </GridItem>
                <GridItem w="100%" h="auto">
                  {" "}
                  <FormControl id="Semplades">
                    <Input
                      type="file"
                      name="Semplades"
                      h="60px"
                      value={Semplades}
                      onChange={handleInput}
                    />
                  </FormControl>{" "}
                </GridItem>
              </Grid>
            </Center>

            <Center>
              <Grid templateColumns="repeat(2, 1fr)" gap={1}>
                <GridItem w="100%" h="10">
                  <FormLabel>Servidumbres y donación: </FormLabel>
                </GridItem>
                <GridItem w="100%" h="auto">
                  {" "}
                  <FormControl id="Dona">
                    <Input
                      type="file"
                      name="Dona"
                      h="60px"
                      value={Dona}
                      onChange={handleInput}
                    />
                  </FormControl>{" "}
                </GridItem>
              </Grid>
            </Center>

            <Center>
              <Grid templateColumns="repeat(2, 1fr)" gap={1}>
                <GridItem w="100%" h="10">
                  <FormLabel>Formulario de requerimiento: </FormLabel>
                </GridItem>
                <GridItem w="100%" h="auto">
                  {" "}
                  <FormControl id="Reque">
                    <Input
                      type="file"
                      name="Reque"
                      h="60px"
                      value={Reque}
                      onChange={handleInput}
                    />
                  </FormControl>{" "}
                </GridItem>
              </Grid>
            </Center>

            <Center>
              <Grid templateColumns="repeat(2, 1fr)" gap={1}>
                <GridItem w="100%" h="10">
                  <FormLabel>Estudio de mercado: </FormLabel>
                </GridItem>
                <GridItem w="100%" h="auto">
                  {" "}
                  <FormControl id="EstMer">
                    <Input
                      type="file"
                      name="EstMer"
                      h="60px"
                      value={EstMer}
                      onChange={handleInput}
                    />
                  </FormControl>{" "}
                </GridItem>
              </Grid>
            </Center>

            <Center>
              <Grid templateColumns="repeat(2, 1fr)" gap={1}>
                <GridItem w="100%" h="10">
                  <FormLabel>Documentación complementaria: </FormLabel>
                </GridItem>
                <GridItem w="100%" h="auto">
                  {" "}
                  <FormControl id="DocCom">
                    <Input
                      type="file"
                      name="DocCom"
                      h="60px"
                      value={DocCom}
                      onChange={handleInput}
                    />
                  </FormControl>{" "}
                </GridItem>
              </Grid>
            </Center>

            <Center>
              <Grid templateColumns="repeat(2, 1fr)" gap={1}>
                <GridItem w="100%" h="10">
                  <FormLabel>Factibilidad eléctrica y Senagua: </FormLabel>
                </GridItem>
                <GridItem w="100%" h="auto">
                  {" "}
                  <FormControl id="Senagua">
                    <Input
                      type="file"
                      name="Senagua"
                      h="60px"
                      value={Senagua}
                      onChange={handleInput}
                    />
                  </FormControl>{" "}
                </GridItem>
              </Grid>
            </Center>

            <Center mt="10px">
              <Button
                type="submit"
                width="100%"
                colorScheme="teal"
                variant="solid"
              >
                Evaluar
              </Button>{" "}
            </Center>
          </FormControl>
        </form>
        */}
      </Box>
    </Center>
  );
};



export default Documentar;
