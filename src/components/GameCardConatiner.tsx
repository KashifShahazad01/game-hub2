import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
export const GameCardConatiner = ({ children }: Props) => {
  return (
    <Box
      _hover={{
        transform: "scale(1.03)",
        transition: "transform 0.15s ease-in",
      }}
      borderRadius={10}
      overflow={"hidden"}
    >
      {children}
    </Box>
  );
};
