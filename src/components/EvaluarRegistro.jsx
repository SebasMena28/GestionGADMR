import {
  FormControl,
  FormLabel,
  FormErrorMessage,
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
  Textarea 
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const evaluar = () => {
  return (
    <Center placeContent="center" w="auto" h="auto" mt='25px' mb='15px'>
      <Box boxShadow="2xl" p="6" w="800px" h="auto"rounded="md" bg="white">
        <Heading size="2xl" mb="25px">
          <Center>Evaluación del Registro #id </Center>
        </Heading>
        <FormControl>
          <FormLabel>Evaluador</FormLabel>
          <Input value="Ing. Anthony Mendoza" type="email" readOnly />
          <FormHelperText >
            Persona encargada del seguimiento.
          </FormHelperText>

          <FormLabel mt='20px'>Detalle</FormLabel>
          <Textarea value='DECLARATORIO DE UTILIDAD PÚBLICA Y OCUPACIÓN INMEDIATA CON FINES DE EXPROPIACIÓN EN PARTE DEL INMUEBLE DE PROPIEDAD DE LAURA RÚALES.' readOnly/> 

          <Box position="relative" padding="10">
            <Divider />
            <AbsoluteCenter bg="white" px="4">
              Etapa Preparatoria
            </AbsoluteCenter>
          </Box>

          <FormLabel>CERTIFICACIÓN PRESUPUESTARIA</FormLabel>
          <Select placeholder="Select country">
            <option selected>Pendiente</option>
            <option>Aprobado</option>
            <option>Documento subido</option>
            <option>En revisión</option>
            <option>Rechazado</option>
            <option>No aplica</option>
          </Select>

          <FormLabel>INFORME DE NECESIDAD DE CONTRATACIÓN</FormLabel>
          <Select placeholder="Select country">
            <option selected>Pendiente</option>
            <option>Aprobado</option>
            <option>Documento subido</option>
            <option>En revisión</option>
            <option>Rechazado</option>
            <option>No aplica</option>
          </Select>

          <FormLabel>INFORME DE NECESIDAD DE CONTRATACIÓN</FormLabel>
          <Select placeholder="Select country">
            <option selected>Pendiente</option>
            <option>Aprobado</option>
            <option>Documento subido</option>
            <option>En revisión</option>
            <option>Rechazado</option>
            <option>No aplica</option>
          </Select>

          <FormLabel>ESTUDIOS, DISEÑO O PROYECTOS</FormLabel>
          <Select placeholder="Select country">
            <option selected>Pendiente</option>
            <option>Aprobado</option>
            <option>Documento subido</option>
            <option>En revisión</option>
            <option>Rechazado</option>
            <option>No aplica</option>
          </Select>

          <FormLabel>TÉRMINOS DE REFERENCIA O ESPECIFICACIONES TÉCNICAS</FormLabel>
          <Select placeholder="Select country">
            <option selected>Pendiente</option>
            <option>Aprobado</option>
            <option>Documento subido</option>
            <option>En revisión</option>
            <option>Rechazado</option>
            <option>No aplica</option>
          </Select>

          <FormLabel>ESTUDIO DE MERCADO</FormLabel>
          <Select placeholder="Select country">
            <option selected>Pendiente</option>
            <option>Aprobado</option>
            <option>Documento subido</option>
            <option>En revisión</option>
            <option>Rechazado</option>
            <option>No aplica</option>
          </Select>

          <FormLabel>FORMULARIO DE CONTRATACIÓN</FormLabel>
          <Select mb='15px' placeholder="Select country">
            <option selected>Pendiente</option>
            <option>Aprobado</option>
            <option>Documento subido</option>
            <option>En revisión</option>
            <option>Rechazado</option>
            <option>No aplica</option>
          </Select>

          <FormLabel>Comentario de la fase Preparatoria</FormLabel>
          <Textarea placeholder='Observaciones o comentarios' />

        

        <Box position="relative" padding="10">
          <Divider />
          <AbsoluteCenter bg="white" px="4">
            Etapa Pre Contractual
          </AbsoluteCenter>
        </Box>

        <FormLabel>CERTIFICACIÓN PAC</FormLabel>
          <Select mb='15px' placeholder="Select country">
            <option selected>Pendiente</option>
            <option>Aprobado</option>
            <option>Documento subido</option>
            <option>En revisión</option>
            <option>Rechazado</option>
            <option>No aplica</option>
          </Select>

          <FormLabel>Comentario de la fase Pre Contractual</FormLabel>
          <Textarea placeholder='Observaciones o comentarios' />

        <Box position="relative" padding="10">
          <Divider />
          <AbsoluteCenter bg="white" px="4">
            Etapa Jurídica
          </AbsoluteCenter>
        </Box>

        <FormLabel>CONTRATOS</FormLabel>
          <Select mb='15px' placeholder="Select country">
            <option selected>Pendiente</option>
            <option>Aprobado</option>
            <option>Documento subido</option>
            <option>En revisión</option>
            <option>Rechazado</option>
            <option>No aplica</option>
          </Select>

          <FormLabel>COMISIÓN TÉCNICA</FormLabel>
          <Select mb='15px' placeholder="Select country">
            <option selected>Pendiente</option>
            <option>Aprobado</option>
            <option>Documento subido</option>
            <option>En revisión</option>
            <option>Rechazado</option>
            <option>No aplica</option>
          </Select>

          <FormLabel>Comentario de la fase Jurídica</FormLabel>
          <Textarea placeholder='Observaciones o comentarios' />        

        <Box position="relative" padding="10">
          <Divider />
          <AbsoluteCenter bg="white" px="4">
            Etapa Cierre
          </AbsoluteCenter>
        </Box>

        <FormLabel>ACTA ENTREGA RECEPCIÓN</FormLabel>
          <Select mb='15px' placeholder="Select country">
            <option selected>Pendiente</option>
            <option>Aprobado</option>
            <option>Documento subido</option>
            <option>En revisión</option>
            <option>Rechazado</option>
            <option>No aplica</option>
          </Select>

          <FormLabel>PAGO DE FINANCIERO</FormLabel>
          <Select mb='15px' placeholder="Select country">
            <option selected>Pendiente</option>
            <option>Aprobado</option>
            <option>Documento subido</option>
            <option>En revisión</option>
            <option>Rechazado</option>
            <option>No aplica</option>
          </Select>

          <FormLabel>Comentario de la fase Cierre</FormLabel>
          <Textarea placeholder='Observaciones o comentarios' /> 

        <Center mt="10px">
          <Button width="100%" colorScheme="teal" variant="solid">
            {" "}
            <Link to="/evaluacion">Evaluar</Link>
          </Button>{" "}
        </Center>
        </FormControl>
      </Box>
    </Center>
  );
};

export default evaluar;
