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

const ModalDoc = ({ isOpen, onClose, setDocs }) => {
  const [data, setData] = useState(initialState);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createDocs(data.docName);
        setData(initialState)
        const result = await getBucket(data.docName)
        setDocs(prevDocs => [...prevDocs, result])
        //console.log(result);
    }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>NUEVOS REGISTROS</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit}>
          <ModalBody pb="5px">
            <FormControl mb="10px">
              <FormLabel htmlFor="folder">Nombre de la actividad:</FormLabel>
              <Input
                name="documento"
                type="text"
                value={data.docName}
                onChange={(e) => setData({ ...data, docName: e.target.value })}
              />
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

export default ModalDoc;
