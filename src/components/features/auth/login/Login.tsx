import { Box, Container } from "@mantine/core";
import { LoginForm } from "./LoginForm";
import Style from "./Style.module.css";

export const Login = () => {
  return (
    <Box
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container size={500} className={Style["login-container"]}>
        <LoginForm />
      </Container>
    </Box>
  );
};
