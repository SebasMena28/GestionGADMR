import { Flex, Box, Stack, Heading, Button, Text } from "@chakra-ui/react";
import Docs from "./Docs";
import { downloadFile, urlFile } from "../services/storage";
import { useParams } from "react-router-dom";
import fileDownload from 'js-file-download'
import {copyText} from "../utils/copyText"


const Files = ({ name, mimetype }) => {
  //console.log(files);

  const {id} = useParams()  
  const download = async () => {
        //console.log("Descargando...")
        const result = await downloadFile(id, name);
        fileDownload(result, name)
        //console.log(result);
    }

    const getUrl = async () =>{
        console.log('Cargando url...')
        const url = await urlFile(id, name)
        await copyText(url.signedUrl)
        //console.log(url.signedUrl);
    }

  return (
    <>
      <Box
        rounded='md'
        borderWidth={"1px"}
        borderColor={"gray.200"}
        padding={"1rem"}
        bg={"gray.100"}
        width='280px'
        mt='15px'
      >
        <Text>
            {mimetype}
        </Text>
        <Stack>
          <Heading
            fontSize={"2xl"}
            color='gray.700'>
            {name}
          </Heading>
        </Stack>
        <Stack mt={6} direction={"row"} spacing={4}>
          
          <Button bg="gray.500" color='white' _hover={{bg: '#A0AEC0'}} onClick={download}>Descargar</Button>
          <Button bg="gray.500" color='white' _hover={{bg: '#A0AEC0'}} onClick={getUrl}>Ver</Button>
        </Stack>
      </Box>

    </>
  );
};

export default Files;
