import {
  Stack,
  Image,
  Heading,
  Text,
  Box,
  Card,
  Divider,
} from "@chakra-ui/react";
import LoginForm from "./LoginForm";

const Auth = () => {
  return (
    <Box height="1">
      <Stack
        p="10"
        rounded="md"
        alignItems="center"
        justifyContent="center"
        backgroundImage="/public/background.jpg"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="100%"
      >
        <Card p="5" widht="1" maxWidth="420" borderRadius="20px" boxShadow="xl">
          <Image
            src="/public/logoRiobamba.png"
            maxW="150px"
            mb="8"
            mx="auto"
          ></Image>
          <Heading as="h4">Inicio de sesión</Heading>
          <Text fontSize="md" color="gray" mb="10px" mt="10px">
            Inicie sesión la información proporcionada por el administrador del
            sistema.
          </Text>
          <Divider></Divider>
          <LoginForm />
        </Card>
      </Stack>
    </Box>
  );
};

export default Auth;