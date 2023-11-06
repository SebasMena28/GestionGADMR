import { Button, Box, Center } from "@chakra-ui/react";
import { usePAC } from "../context/AuthContext";
import { useEffect } from "react";
import PACCard from "./CARD";
import { useAuth } from "../context/AuthContext";

function PACList() {
  const {user} = useAuth();
  //console.log(user.id)
  const { pacs, getPacs } = usePAC();
  //console.log(pacs)
  useEffect(() => {
    getPacs(user.id);
  }, []);
 

  return (
    <>
      <Box display="flex" flexWrap="wrap" mb="5px">
      {pacs.length === 0 && <p>No se han encontrado registros</p>}
        {pacs.map((pac) => (
          <PACCard pac={pac} key={pac.idactividad}/> //aqui pones la fila
        ))}
      </Box>
    </>
  );
}

export default PACList;
