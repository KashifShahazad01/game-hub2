import { HStack, Switch, useColorMode, Text } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text whiteSpace={"nowrap"}>Dark Mode</Text>
    </HStack>
  );
};
export default ColorModeSwitch;
