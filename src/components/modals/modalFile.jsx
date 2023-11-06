import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";

import { useState } from "react";
import { createDocs, getBucket } from "../../services/storage";
const initialState = {
  docName: "",
};

const ModalFile = ({ isOpen, onClose, uploadFile, saveFile }) => {

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Subir el archivo</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={saveFile}>
          <ModalBody pb="5px">
            <FormControl mb="10px">
              <FormLabel htmlFor="folder">Ponga aqui el documento </FormLabel>
              <Input name="documento" type="file" onChange={uploadFile}/>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button type="submit" colorScheme="blue" mr={3}>
              Guardar
            </Button>
            <Button onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default ModalFile;
