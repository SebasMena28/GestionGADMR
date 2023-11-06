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
  Textarea,
  Stack,
} from "@chakra-ui/react";
import useForm from "../hooks/useForm";
import { useState } from "react";
import { usePAC } from "../context/AuthContext";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const EditarForm = () => {
  const { objeto } = useParams();
  const {pacs, obtenerbyId, editPacs } = usePAC();

  useEffect(() => {
    const id = objeto.slice(1);
    obtenerbyId(id);
  }, []);

  const initialState = {
    idproyecto: pacs[0].idproyecto,
    idtecnico: pacs[0].idtecnico,
    iddireccion: pacs[0].iddireccion,
    idtipocompra: pacs[0].idtipocompra,
    idunidad: pacs[0].idunidad,
    idperiodos: pacs[0].idperiodos,
    idproceso: pacs[0].idproceso,
    idfondobid: pacs[0].idfondobid,
    idtipopresupuesto: pacs[0].idtipopresupuesto,
    idregimen: pacs[0].idregimen,
    idtipoproducto: pacs[0].idtipoproducto,
    anio: pacs[0].anio,
    partidapresupuestaria: pacs[0].partidapresupuestaria,
    cpc: pacs[0].cpc,
    detalle: pacs[0].detalle,
    cantidad: pacs[0].cantidad,
    costounitario: pacs[0].costounitario,
    subtotal: pacs[0].subtotal,
    catalogoelectronico: pacs[0].catalogoelectronico,
    fechacreacion: pacs[0].fechacreacion
  };

  const { formValues, handleInput } = useForm(initialState);

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
    editPacs(pacs[0].idactividad, formValues);
    console.log(formValues);
  };

  return (
    <>
      <Heading size="2xl" mb="25px">
        <Center>Edicion del registro de pac</Center>
      </Heading>
      <form onSubmit={handleSubmit}>
        <Stack spacing={5}>
          <FormControl id="idproyecto">
            <FormLabel>Proyecto: </FormLabel>
            <Select
              placeholder="Elija el proyecto"
              name="idproyecto"
              value={idproyecto}
              onChange={handleInput}
            >
              <option selected value="1">
                Proyecto 1
              </option>
              <option value="2">Proyecto 2</option>
              <option value="3">Proyecto 3</option>
            </Select>
          </FormControl>

          <FormControl id="anio">
            <FormLabel>Año </FormLabel>
            <Input
              type="number"
              name="anio"
              placeholder="Dijite el año"
              value={anio}
              onChange={handleInput}
            />
          </FormControl>

          <FormControl id="partidapresupuestaria">
            <FormLabel>Partida presupuestaria: </FormLabel>
            <Input
              type="number"
              name="partidapresupuestaria"
              placeholder="Ingrese la partida presupuestaria"
              value={partidapresupuestaria}
              onChange={handleInput}
            />
          </FormControl>

          <FormControl id="cpc">
            <FormLabel>CPC: </FormLabel>
            <Input
              type="number"
              name="cpc"
              value={cpc}
              placeholder="Ingrese la partida presupuestaria"
              onChange={handleInput}
            />
          </FormControl>

          <FormControl id="idtipocompra">
            <FormLabel>Tipo de compra</FormLabel>
            <Select
              placeholder="Elija el tipo de compra"
              name="idtipocompra"
              value={idtipocompra}
              onChange={handleInput}
            >
              <option selected value="1">
                BIEN
              </option>
              <option value="2">SERVICIO</option>
              <option value="3">CONSULTORIA</option>
            </Select>
          </FormControl>

          <FormControl id="detalle">
            <FormLabel>DETALLE: </FormLabel>
            <Textarea
              name="detalle"
              placeholder="Ingrese el detalle"
              value={detalle}
              onChange={handleInput}
            />
          </FormControl>

          <FormControl id="cantidad">
            <FormLabel>Cantidad: </FormLabel>
            <Input
              type="number"
              name="cantidad"
              placeholder="Ingrese la cantidad anual"
              value={cantidad}
              onChange={handleInput}
            />
          </FormControl>

          <FormControl id="idunidad">
            <FormLabel>Unidad: </FormLabel>
            <Select
              placeholder="Elija la unidad"
              name="idunidad"
              value={idunidad}
              onChange={handleInput}
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

          <FormControl id="costounitario">
            <FormLabel>Costo unitario: </FormLabel>
            <Input
              type="number"
              name="costounitario"
              placeholder="Ingrese el costo"
              value={costounitario}
              onChange={handleInput}
            />
          </FormControl>

          <FormControl id="idperiodos">
            <FormLabel>Periodos: </FormLabel>
            <Select
              placeholder="Elija el periodo"
              name="idperiodos"
              value={idperiodos}
              onChange={handleInput}
            >
              <option selected value="1">
                CUATRIMESTRE 1
              </option>
              <option value="2">CUATRIMESTRE 2</option>
              <option value="3">CUATRIMESTRE 3</option>
            </Select>
          </FormControl>

          <FormControl id="idtipoproducto">
            <FormLabel>Tipo de producto: </FormLabel>
            <Select
              placeholder="Elija el tipo de producto"
              name="idtipoproducto"
              value={idtipoproducto}
              onChange={handleInput}
            >
              <option selected value="1">
                NORMALIZADO
              </option>
              <option value="2">NO NORMALIZADO </option>
            </Select>
          </FormControl>

          <FormControl id="catalogoelectronico">
            <FormLabel>Catálogo electrónico: </FormLabel>
            <Select
              name="catalogoelectronico"
              value={catalogoelectronico}
              onChange={handleInput}
            >
              <option selected value="FALSE">
                NO
              </option>
              <option value="TRUE">SI</option>
            </Select>
          </FormControl>

          <FormControl id="idfondobid">
            <FormLabel>Fondos BID: </FormLabel>
            <Select name="idfondobid" value={idfondobid} onChange={handleInput}>
              <option selected value="1">
                NO
              </option>
            </Select>
          </FormControl>

          <FormControl id="idregimen">
            <FormLabel>Tipo de régimen: </FormLabel>
            <Select
              placeholder="Elija el tipo de régimen"
              name="idregimen"
              value={idregimen}
              onChange={handleInput}
            >
              <option selected value="1">
                COMUN
              </option>
              <option value="2">ESPECIAL</option>
            </Select>
          </FormControl>

          <FormControl id="idtipopresupuesto">
            <FormLabel>Tipo de presupuesto: </FormLabel>
            <Select
              placeholder="Elija el tipo de presupuesto"
              name="idtipopresupuesto"
              value={idtipopresupuesto}
              onChange={handleInput}
            >
              <option selected value="1">
                PROYECTO DE INVERSION
              </option>
              <option value="2">GASTO CORRIENTE</option>
            </Select>
          </FormControl>

          <Button type="submit" colorScheme="blue">
            Guardar cambios
          </Button>
        </Stack>
      </form>
    </>
  );
};

export default EditarForm;
