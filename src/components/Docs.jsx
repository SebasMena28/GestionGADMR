import { Box, Stack, Heading, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Link as ReachLink } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const Docs = ({ id, name }) => {
  const Visibility = id == 0 ? "green.500" : "red.500";

  useEffect(() => {
    //console.log(idDocumento)
  });

  return (
    <>
      <Box rounded={"md"} width="250px" bg="blue.700" padding="1rem" m="5px">
        <Stack spacing={5}>
          <Heading fontSize={"2xl"} color="gray.100">
            {name}
          </Heading>
          
          <Button
            size="lg"
            color="#223059"
            rounded={30}
            borderColor="#223059"
            border="1px"
            _hover={{ bg: "#223059", color: "lightgray" }}
            w='50%'
            h='auto'
          >
            <Link as={ReachLink} to={"/PAC/documentar/" + id}>
            Ver
          </Link>
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default Docs;
