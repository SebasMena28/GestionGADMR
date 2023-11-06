import { Flex } from "@chakra-ui/react";
import Docs from "./Docs";
import Files from "./File";

const ListFiles = ({ files }) => {
  //console.log(files);
  return (
    <>
      <Flex>
        {files.length === 0 && <p>No hay archivos</p>}
        {files.map(file =>(<Files key={file.id} {...file}/>))}
      </Flex>
    </>
  );
};

export default ListFiles;
