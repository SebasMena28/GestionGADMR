import {
  Center,
  Box,
  Heading,
  Button,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ListFiles from "./ListFiles";
import { useParams } from "react-router-dom";
import useFiles from "../hooks/useFiles";
import ModalFile from "./modals/modalFile";

const Detalles = () => {

  const { id } = useParams();
  const {files, uploadFile, saveFile} = useFiles(id)
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Center placeContent="center" w="auto" h="auto" mt="25px" mb="15px">
        <Box boxShadow="2xl" p="6" w="800px" h="auto" rounded="md" bg="white">
          <Heading size="2xl" mb="25px">
            <Center>DOCUMENTACION DE PAC #ID </Center>
          </Heading>
          <Button onClick={onOpen}>Subir documento</Button>
          <ListFiles files={files} />
          {isOpen && (<ModalFile isOpen={isOpen} onClose={onClose} uploadFile={uploadFile} saveFile={saveFile}/>)}
        </Box>
      </Center>
    </>
  );
};

export default Detalles;
