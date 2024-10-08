import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { NavBar } from "../components/NavBar";

export const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Box paddingX={5}>
        <Heading>Oops</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "This page does not exits"
            : "An unexpected error occured."}
        </Text>
      </Box>
    </>
  );
};
