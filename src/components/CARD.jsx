import { Button, Box, Text, Grid, GridItem, Center} from "@chakra-ui/react";
import { usePAC } from "../context/AuthContext";
import { Link } from "react-router-dom";

function PACCard({ pac }) {
  const {deletePacs,  getPacsbyId} = usePAC()
  const link = "/PAC/editar/:"+pac.idactividad;

  const borrar = () => {
    deletePacs(pac.idactividad, pac.detalle);
  };

  const editar = () => {
        getPacsbyId(pac.idactividad)
  };

  return (
    <>
      <Box 
        boxSizing="border-box"
        borderRadius="6px"
        boxShadow="2xl"
        mt="5px"
        ml="10px"
        p="15px"
        borderColor="#223059"
        border="1px"
        mb="20px"
      >
        <Text as="b">Detalle:</Text>
        <Text> {pac.detalle}</Text>
        <Text as="b">Partida presupuesaria:</Text>
        <Text>{pac.partidapresupuestaria}</Text>
        <Text as="b">Subtotal:</Text>
        <Text>$ {pac.subtotal}</Text>
        <Grid
          mt="10px"
          templateRows="repeat(1, 1fr)"
          templateColumns="repeat(3, 1fr)"
          gap={4}
          mb="5px"
        >

          <GridItem >
            <Center>
            <Button
              size="lg"
              color="#223059"
              rounded={30}
              borderColor="#223059"
              border="1px"
              _hover={{ bg: "#223059", color: "lightgray" }}
              onClick={() => editar()}
            >
              Ver
            </Button>
            </Center>
            
          </GridItem>
          
          <GridItem >
            <Center>
            <Button
              size="lg"
              color="red"
              rounded={30}
              borderColor="red"
              border="1px"
              _hover={{ bg: "red", color: "lightgray" }}
              onClick={() => borrar()}
              >
                Borrar
            </Button>
            </Center>
            
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}

export default PACCard;
  